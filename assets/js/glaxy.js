class Starfield {
    constructor(elem, starCount, speed, fps) {
      this.elem = elem;
      this.ctx = this.elem.getContext('2d');
      this.starCount = starCount || 2000;
      this.fps = fps || 60;
      this.speed = speed || 1;
  
      // Set up resizing
      this.elem.width = window.innerWidth;
      this.elem.height = window.innerHeight;
      window.addEventListener('resize', () => this.resize());
  
      // Build a list of stars with X Y and Z coordinates
      this.stars = [];
      for (let i = 0; i < this.starCount; i += 1) {
        this.stars.push(this.getStar(false));
      }
  
      // Set up mouse interaction to slightly change stars direction
      this.mouseOffset = [0, 0];
      window.addEventListener('mousemove', e => this.updateMouseOffset(e));
  
      // Begin render loop
      this.start();
    }
  
    getStar(back) {
      const rand = (low, high) => (Math.random() * (high - low)) + low;
      const polToCart = (r, theta) => [
        r * Math.cos(theta),
        r * Math.sin(theta),
      ];
  
      const maxRadius = Math.min(this.elem.width, this.elem.height) / 4 / 2;
      const pos = polToCart(
        rand(maxRadius / 25, maxRadius),
        rand(0, Math.PI * 2),
      );
  
      return {
        x: pos[0],
        y: pos[1],
        z: back ? 25 : rand(0, 25),
      };
    }
  
    // When the window is resized, adjust canvas coordinate system
    resize() {
      this.elem.width = window.innerWidth;
      this.elem.height = window.innerHeight;
      this.draw();
    }
  
    updateMouseOffset(e) {
      const x = e.clientX;
      const y = e.clientY;
      this.mouseOffset = [
        (x - (window.innerWidth / 2)) / 75,
        (y - (window.innerHeight / 2)) / 75,
      ];
    }
  
    // Render
    draw() {
      this.ctx.clearRect(0, 0, this.elem.width, this.elem.height);
  
      for (let i = 0; i < this.stars.length; i += 1) {
        const star = this.stars[i];
        const progress = (1 - (star.z / 25));
        const lightness = Math.round(progress * 182);
        this.ctx.fillStyle = `rgb(${lightness}, ${lightness}, ${lightness})`;
  
        const projectedX = (100 / star.z) * (star.x + this.mouseOffset[0]);
        const projectedY = (100 / star.z) * (star.y + this.mouseOffset[1]);
        const finalX = projectedX + (this.elem.width / 2);
        const finalY = projectedY + (this.elem.height / 2);
  
        this.ctx.fillRect(finalX, finalY, 5 * progress, 5 * progress);
  
        star.z -= this.speed / 10;
        if (star.z < 0 ||
            finalX < 0 ||
            finalY < 0 ||
            finalX > this.elem.width ||
            finalY > this.elem.height) {
          this.stars[i] = this.getStar(true);
        }
      }
    }
  
    // Begin render loop
    start() {
      this.interval = setInterval(
        () => requestAnimationFrame(() => this.draw()),
        8000 / this.fps,
      );
    }
  
    // Pause render loop
    stop() {
      clearInterval(this.interval);
    }
  }
  
  const canvas = document.querySelector('.glaxy-canvas');
  window.stars = new Starfield(canvas);

  