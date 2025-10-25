function toggleFilter() {
            alert('Membuka filter...');
        }

        function searchKos() {
            const searchValue = document.getElementById('searchInput').value;
            if (searchValue.trim()) {
                alert('Mencari: ' + searchValue);
            } else {
                alert('Silakan masukkan kata kunci pencarian');
            }
        }

        function handleBook(event) {
            event.stopPropagation();
            alert('Memproses booking kos...');
        }

        function goToDetail() {
            alert('Membuka detail kos...');
            // window.location.href = 'detail.html';
        }

        function previousPage() {
            alert('Halaman sebelumnya');
        }

        function nextPage() {
            alert('Halaman berikutnya');
        }

        function goToPage(page) {
            alert('Pergi ke halaman ' + page);
        }

        // Search on Enter
        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchKos();
            }
        });