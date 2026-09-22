// ==========================================================================
// BÀI TẬP THỰC HÀNH CHƯƠNG 7: CSS3 - MÔN THIẾT KẾ WEB
// Tên file: js/script.js
// ==========================================================================

let cartCount = 0;

/**
 * Hàm thêm món ăn vào giỏ hàng và hiển thị Toast thông báo
 * @param {string} itemName - Tên món ăn được chọn
 */
function addToCart(itemName) {
    cartCount++;
    // Cập nhật số lượng hiển thị trên Giỏ hàng
    document.getElementById('cart-count').innerText = cartCount;

    // Hiển thị thông báo Toast
    const toast = document.getElementById('toast');
    toast.innerText = `Đã thêm "${itemName}" vào giỏ hàng!`;
    toast.style.display = 'block';

    // Tự động ẩn thông báo sau 2.5 giây
    setTimeout(() => {
        toast.style.display = 'none';
    }, 2500);
}

// Xử lý sự kiện sau khi toàn bộ trang HTML đã tải xong
document.addEventListener('DOMContentLoaded', () => {

    // 1. CHỨC NĂNG LỌC SẢN PHẨM THEO DANH MỤC
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sections = document.querySelectorAll('.menu-section');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Xóa class active ở tất cả các nút
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Thêm active cho nút vừa click
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            sections.forEach(section => {
                if (filterValue === 'all') {
                    section.style.display = 'block';
                } else {
                    if (section.getAttribute('data-category') === filterValue) {
                        section.style.display = 'block';
                    } else {
                        section.style.display = 'none';
                    }
                }
            });
        });
    });

    // 2. TƯƠNG TÁC CHUYỂN ACTIVE TRÊN THANH NAVIGATION MAIN
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});