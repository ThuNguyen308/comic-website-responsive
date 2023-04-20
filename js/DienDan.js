var days = ["Chủ nhật","Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6","Thứ 7"]

function showcmt()
{
    let Comment = {
        mane : prompt("Tên người dùng"),
        time : new Date(),
        content: prompt("Nội dung: "),

        show : function()
        {
            let boxs = document.getElementById("boxs");
            let box = document.createElement("div");
            boxs.appendChild(box);
            box.classList.add("cmt")
            box.innerHTML = 
            `<p class="user">@<span>${this.mane}</span></p>
            <p class="time">${this.time.getHours()}:${this.time.getMinutes()} ${days[this.time.getDay()]} ngày 
            ${this.time.getDate()}/${this.time.getMonth()+1}/${this.time.getFullYear()}</p>
            <p class="content">${this.content}</p>`;
        },
    }
    Comment.show();

}
document.getElementById("btngui").onclick = function()
{
    showcmt();
}