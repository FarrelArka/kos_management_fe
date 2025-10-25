
        function handleSearch() {
            const searchInput = document.getElementById('searchInput');
            const searchValue = searchInput.value.trim();
            
            if (searchValue) {
                alert('Mencari kosan: ' + searchValue);
            } else {
                alert('Silakan masukkan kata kunci pencarian');
            }
        }

        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            });
        });

        document.querySelectorAll('.book-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const kosName = this.closest('.kos-card').querySelector('.kos-title').textContent;
                alert('Booking untuk ' + kosName);
            });
        });

        document.querySelectorAll('.page-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                if (!this.textContent.includes('<') && !this.textContent.includes('>')) {
                    document.querySelectorAll('.page-btn').forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                }
            });
        });