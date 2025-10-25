function handleChat() {
            alert('Membuka fitur chat...');
        }

        function handleBook() {
            alert('Memproses booking kos...');
        }

        function sendReview() {
            const commentBox = document.getElementById('commentBox');
            const reviewsList = document.getElementById('reviewsList');
            const comment = commentBox.value.trim();
            
            if (comment) {
                const reviewItem = document.createElement('div');
                reviewItem.className = 'review-item';
                reviewItem.innerHTML = `
                    <div class="review-name">Anda</div>
                    <div class="review-text">"${comment}"</div>
                `;
                reviewsList.insertBefore(reviewItem, reviewsList.firstChild);
                commentBox.value = '';
                
                alert('Review berhasil dikirim!');
            } else {
                alert('Silakan tulis komentar terlebih dahulu!');
            }
        }

        document.getElementById('commentBox').addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && e.ctrlKey) {
                sendReview();
            }
        });