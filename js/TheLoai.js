function tChanged(obj)
{
    document.getElementById("lbl").style.display ="block";
    var message = document.getElementById("txtlbl");
    var value = obj.value;
    if (value == "0")
    {
        message.innerHTML = "Tất cả thể loại truyện tranh.";
    }
    if (value == "1")
    {
        message.innerHTML = "Thể loại này thường có nội dung về đánh nhau, bạo lực, hỗn loạn, với diễn biến nhanh.";
    }
    if (value == "2")
    {
        message.innerHTML = "Thể loại phiêu lưu, mạo hiểm, thường là hành trình của các nhân vật.";
    }
    if (value == "3")
    {
        message.innerHTML = "Truyện đã được chuyển thể thành film Anime.";
    }
    if (value == "4")
    {
        message.innerHTML = "Thể loại này là những câu chuyện về người ở một thế giới này xuyên đến một thế giới khác, có thể là thế giới mang phong cách trung cổ với kiếm sĩ và ma thuật, hay thế giới trong game, hoặc có thể là bạn chết ở nơi này và được chuyển sinh đến nơi khác.";
    }
    if (value == "5")
    {
        message.innerHTML = "Truyện có nội dung xảy ra ở thời cổ đại phong kiến.";
    }
    if (value == "6")
    {
        message.innerHTML = "Thể loại truyện tình cảm, lãng mạn mà trong đó, nhiều nhân vật nữ thích một nam nhân vật chính.";
    }
    if (value == "7")
    {
        message.innerHTML = "Truyện tranh của Nhật Bản.";
    }
    if (value == "8")
    {
        message.innerHTML = "Truyện tranh của Trung Quốc.";
    }
    if (value == "9")
    {
        message.innerHTML = "Truyện tranh Hàn Quốc, đọc từ trái sang phải.";
    }
    if (value == "10")
    {
        message.innerHTML = "Truyện thuộc kiểu lãng mạn, kể về những sự kiện vui buồn trong tình yêu của nhân vật chính.";
    }
    if (value == "11")
    {
        message.innerHTML = "Những truyện ngắn, thường là 1 chapter.";
    }
}
document.getElementById("btntim").onclick = function()
{
    document.getElementById("lst").style.display = "block";
}
