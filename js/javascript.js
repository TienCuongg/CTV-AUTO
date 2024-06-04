
// -------------------------------------------------menu------------------------------------------------------------
$(document).ready(function () {

    $('#main-menu>li#booking>a').click(function (event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ a

        $('#container').toggleClass('hidden'); // Sử dụng toggleClass() để thêm hoặc loại bỏ lớp hidden

        return false;
    });

    $(document).ready(function () {
        // Chuyển đổi menu-child khi click vào link đặt chỗ
        $('#main-menu-reponsive #booking > a').click(function (event) {
            event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ tag
            $('#main-menu-reponsive #menu-child').stop().slideToggle(500); // Sử dụng slideToggle để tạo hiệu ứng thả xuống
        });

        // Đóng menu-con khi nhấp vào bất kỳ liên kết menu nào khác
        $('#main-menu-reponsive > li > a').not('#booking > a').click(function () {
            $('#main-menu-reponsive #menu-child').stop().slideUp(500); // Sử dụng slideUp để đóng menu thả xuống
        });

        // Tùy chọn đóng menu-con khi click ra ngoài menu        $(document).click(function(event) {
        if (!$(event.target).closest('#main-menu-reponsive').length) {
            $('#main-menu-reponsive #menu-child').stop().slideUp(500);// Sử dụng slideUp để đóng menu thả xuống
        }
    });



    // -----------------------------------------header-------------------------------------------------------------
    $(document).ready(function () {
        $('#icon-menu').click(function () {
            $('#main-menu-reponsive').slideToggle(500);
        })


        function toggleHeader() {
            if ($(window).width() < 1024) {
                $('#header').hide();
                $('#container').css('top', '0px');
            } else {
                if ($(window).scrollTop() > 53) {
                    $('#container').css('top', '0px');
                    $('#header').stop().slideUp(700);
                } else {
                    $('#container').css('top', '53px');
                    $('#header').stop().slideDown(700);
                }
            }
        }

        // Gọi hàm khi cuộn
        $(window).scroll(function () {
            toggleHeader();
        });

        // Gọi hàm khi thay đổi kích thước cửa sổ
        $(window).resize(function () {
            toggleHeader();
        });

    })


    // ---------------------------------------carousel-----------------------------------------------------------------------------
    var currentIndex = 0;
    var items = $(".item-carousel");
    var intervalId;

    // Hàm di chuyển tới mục tiếp theo trong carousel
    function nextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }

    // Hàm hiển thị item trong carousel với hiệu ứng mờ dần
    function showItem(index) {
        items.fadeOut(1500); // Làm mờ tất cả các mục
        items.eq(index).fadeIn(1000);// Làm mờ dần mục đã chọn
        return false;
    }

    // Bắt đầu băng chuyền tự động
    intervalId = setInterval(nextItem, 2000); // Thay đổi 2000 thành khoảng thời gian mong muốn

    // Xử lý khi người dùng click vào nút trước đó
    $(".prev").click(function () {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
        clearInterval(intervalId); // Dừng băng chuyền tự động khi người dùng nhấp vào
    });

    // Xử lý khi người dùng click vào nút tiếp theo
    $(".next").click(function () {
        nextItem();
        clearInterval(intervalId); // Dừng băng chuyền tự động khi người dùng nhấp vào
    });



    // -------------------------------------------------service-out---------------------------------------------------

    $('button').click(function () {
        // Lấy chỉ số của nút button được click
        var clickBtn = parseInt($(this).attr("bt"));

        // Ẩn tất cả các ảnh trong .box-left>img
        $('.box-left>img').not('.box-left>img:first-child').hide();

        // Hiển thị ảnh tương ứng với chỉ số của nút button được click
        $('.box-left>img[number="' + clickBtn + '"]').show();
    });


    $('.box-1 button:first-of-type').addClass('active-button');
    $('.box-1 button:first-of-type').children('h4').addClass('active-h4');
    $('.box-1 button:first-of-type').children('img').addClass('active-img');

    $('.box-1 button').click(function () {
        // Loại bỏ lớp active-button, active-h4, active-img từ tất cả các button, h4 và img trong .box-1
        $('.box-1 button').removeClass('active-button');
        $('.box-1 button h4').removeClass('active-h4');
        $('.box-1 button img').removeClass('active-img');

        // Thêm lớp active-button, active-h4, active-img cho button, h4 và img mà được click
        $(this).addClass('active-button');
        $(this).find('h4').addClass('active-h4');
        $(this).find('img').addClass('active-img');
    });


    // ---------------------------booking-------------------------------------
    $('.container-form form').submit(function (event) {
        // Ngăn chặn hành động gửi form mặc định
        event.preventDefault();

        // Xóa các thông báo lỗi trước
        $('.error').text('');

        // Kiểm tra họ và tên
        var fullName = $('#fullName').val().trim();
        if (fullName === '') {
            $('#fullNameError').text('Vui lòng nhập họ và tên.').css({ outline: 'none', color: 'red', position: 'absolute', top: '40px', 'font-size': '11px', left: '5px' });
            return;
        } else if (!/^[a-zA-ZaAâÂăĂeEêÊiIoOôÔơƠuUưƯyYđĐáÁấẤắẮéÉếẾíÍóÓốỐớỚúÚứỨýÝàÀầẦằẰèÈềỀìÌòÒồỒờỜùÙừỪỳỲảẢẩẨẳẲẻẺểỂỉỈỏỎổỔởỞủỦửỬỷỶãÃẫẪẵẴẽẼễỄĩĨõÕỗỖỡỠũŨữỮỹỸạẠậẬặẶẹẸệỆịỊọỌộỘợỢụỤựỰỵỴ\s]+$/u.test(fullName)) {
            $('#fullNameError').text('Họ và tên chỉ được chứa ký tự chữ dấu và khoảng trắng.').css({ outline: 'none', color: 'red', position: 'absolute', top: '40px', 'font-size': '11px', left: '5px' });
            return;
        } else {
            $('#fullNameError').empty();
        }

        // Kiểm tra địa chỉ email
        var email = $('#email').val().trim();
        if (email === '') {
            $('#emailError').text('Vui lòng nhập địa chỉ email.').css({ outline: 'none', color: 'red', position: 'absolute', top: '40px', 'font-size': '11px', right: '116px' });
            return;
        } else if (!validateEmail(email)) {
            $('#emailError').text('Địa chỉ email không hợp lệ.').css({ outline: 'none', color: 'red', position: 'absolute', top: '40px', 'font-size': '11px', right: '116px' });
            return;
        } else {
            $('#serviceError').empty(); // Xóa nội dung của phần tử hiển thị lỗi
        }

        // Kiểm tra việc chọn dịch vụ
        var service = $('#service').val();

        if (service === '0') {
            $('#serviceError').text('Vui lòng chọn một dịch vụ.').css({ position: 'absolute', top: '40px', left: '6px', 'font-size': '11px', 'outline': 'none', color: 'red' });
            return;
        } else {
            $('#serviceError').empty(); // Xóa nội dung của phần tử hiển thị lỗi
        }

        // Kiểm tra ngày phục vụ
        var serviceDate = $('#serviceDate').val().trim();
        if (serviceDate === '') {
            $('#serviceDateError').text('Vui lòng nhập ngày phục vụ dưới dạng số.').css({ position: 'absolute', 'font-size': '11px', color: 'red', top: '40px', right: '42px' });
            return;
        } else if (isNaN(serviceDate)) {
            $('#serviceDateError').text('Vui lòng nhập ngày phục vụ dưới dạng số.').css({ position: 'absolute', 'font-size': '11px', color: 'red', top: '40px', right: '42px' });
            return;
        } else {
            $('#serviceError').empty(); // Xóa nội dung của phần tử hiển thị lỗi
        }



        alert('Form đã gửi!');
        return false;
    });

    function validateEmail(email) {
        // Kiểm tra định dạng email bằng biểu thức chính quy
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    // -------------------------------------------------technocian----------------------------------------------------
    $('.wp-item-technicians').hover(
        function () {
            $(this).find('.more-active').toggleClass('hover-show-app');



        }
    );

    // -------------------------------------------testimonial-----------------------------------------------------
    // Function to switch to next testimonial
    function nextTestimonial() {
        let current = $('.list-testimonial-item.active');
        let next = current.next('.list-testimonial-item');
        if (next.length === 0) {
            next = $('.list-testimonial-item').first();
        }

        let currentBtn = $('.btn-item.active-btn');
        let nextBtn = currentBtn.next('.btn-item');
        if (nextBtn.length === 0) {
            nextBtn = $('.btn-item').first();
        }

        current.removeClass('active').fadeOut(100);
        next.addClass('active').fadeIn(100);

        currentBtn.removeClass('active-btn');
        nextBtn.addClass('active-btn');
    }

    //  tự động phát
    let interval = setInterval(nextTestimonial, 5000); // Điều chỉnh khoảng thời gian nếu cần (tính bằng mili giây)

    // Dừng tự động phát khi lick
    $('.btn-item').click(function () {
        clearInterval(interval);
        let id = $(this).attr('id');
        $('.btn-item').removeClass('active-btn');
        $(this).addClass('active-btn');
        $('.list-testimonial-item').removeClass('active').fadeOut(500);
        $('#' + id).addClass('active').fadeIn(500);
        interval = setInterval(nextTestimonial, 5000); // Khởi động lại tự động 
    });

    // // ---------------------------------------------------------footer------------------------------------------------------------
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    // Click event handler for SignUp button
    $('.form-email button').click(function () {
        var email = $('.form-email input[type="email"]').val();
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Biểu thức chính quy kiểm tra định dạng email
        if (!emailPattern.test(email)) {
            alert('Vui lòng nhập đúng định dạng email.');
            return false; // Ngăn form được submit
        }
        alert('ok');
        // Nếu email hợp lệ, bạn có thể thực hiện các hành động tiếp theo ở đây
        return false;
    });

});


