/**
 * ============================================
 * 液态以太背景效果
 * ============================================
 * 使用Canvas实现类似液态流动的背景动画
 * 偏淡蓝色配色方案
 */

(function() {
    'use strict';

    // 等待DOM加载完成
    document.addEventListener('DOMContentLoaded', function() {
        const canvas = document.getElementById('liquidBackground');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let mouse = { x: 0, y: 0, radius: 100 };

        // 淡蓝色配色方案
        const colors = [
            'rgba(100, 149, 237, 0.6)',  // 矢车菊蓝
            'rgba(135, 206, 250, 0.5)',  // 天蓝色
            'rgba(173, 216, 230, 0.4)',  // 浅蓝色
            'rgba(176, 224, 230, 0.5)',  // 粉蓝色
            'rgba(152, 251, 152, 0.3)',  // 淡绿色
            'rgba(147, 112, 219, 0.4)'   // 中紫色
        ];

        // 粒子类
        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 150 + 50;
                this.speedX = (Math.random() - 0.5) * 2;
                this.speedY = (Math.random() - 0.5) * 2;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.originalX = this.x;
                this.originalY = this.y;
                this.density = Math.random() * 30 + 1;
            }

            update() {
                // 鼠标交互
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let maxDistance = mouse.radius;
                let force = (maxDistance - distance) / maxDistance;
                let directionX = forceDirectionX * force * this.density;
                let directionY = forceDirectionY * force * this.density;

                if (distance < mouse.radius) {
                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    // 缓慢回到原位
                    if (this.x !== this.originalX) {
                        let dx = this.x - this.originalX;
                        this.x -= dx / 20;
                    }
                    if (this.y !== this.originalY) {
                        let dy = this.y - this.originalY;
                        this.y -= dy / 20;
                    }
                }

                // 基础移动
                this.x += this.speedX;
                this.y += this.speedY;

                // 边界检测
                if (this.x < -this.size) this.x = width + this.size;
                if (this.x > width + this.size) this.x = -this.size;
                if (this.y < -this.size) this.y = height + this.size;
                if (this.y > height + this.size) this.y = -this.size;
            }

            draw() {
                ctx.beginPath();
                const gradient = ctx.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, this.size
                );
                gradient.addColorStop(0, this.color);
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
                ctx.fillStyle = gradient;
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // 初始化
        function init() {
            resize();
            createParticles();
            animate();
        }

        // 调整大小
        function resize() {
            const hero = canvas.parentElement;
            width = hero.offsetWidth;
            height = hero.offsetHeight;
            canvas.width = width;
            canvas.height = height;
        }

        // 创建粒子
        function createParticles() {
            particles = [];
            const numberOfParticles = Math.min(30, (width * height) / 15000);
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        }

        // 动画循环
        function animate() {
            ctx.clearRect(0, 0, width, height);

            // 绘制背景渐变
            const bgGradient = ctx.createLinearGradient(0, 0, width, height);
            bgGradient.addColorStop(0, 'rgba(70, 130, 180, 0.3)');  // 钢蓝色
            bgGradient.addColorStop(0.5, 'rgba(100, 149, 237, 0.2)');  // 矢车菊蓝
            bgGradient.addColorStop(1, 'rgba(135, 206, 250, 0.3)');  // 天蓝色
            ctx.fillStyle = bgGradient;
            ctx.fillRect(0, 0, width, height);

            // 更新和绘制粒子
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // 连接附近的粒子
            connectParticles();

            requestAnimationFrame(animate);
        }

        // 连接粒子
        function connectParticles() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    let dx = particles[i].x - particles[j].x;
                    let dy = particles[i].y - particles[j].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 200) {
                        let opacity = 1 - distance / 200;
                        ctx.strokeStyle = `rgba(135, 206, 250, ${opacity * 0.2})`;
                        ctx.lineWidth = 2;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }

        // 鼠标移动事件
        canvas.parentElement.addEventListener('mousemove', function(e) {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });

        // 鼠标离开事件
        canvas.parentElement.addEventListener('mouseleave', function() {
            mouse.x = -1000;
            mouse.y = -1000;
        });

        // 窗口大小改变事件
        window.addEventListener('resize', function() {
            resize();
            createParticles();
        });

        // 启动
        init();
    });
})();
