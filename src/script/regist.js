   function togglePassword() {
            const passwordInput = document.getElementById('password');
            const toggle = document.querySelector('.password-toggle');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggle.textContent = '🙈';
            } else {
                passwordInput.type = 'password';
                toggle.textContent = '👁️';
            }
        }

        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const phone = document.getElementById('phone').value;
            const role = document.getElementById('role').value;
            
            if (username && email && password && phone && role) {
                alert('Pendaftaran berhasil!\nUsername: ' + username + '\nEmail: ' + email + '\nRole: ' + role);
            }
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            });
        });