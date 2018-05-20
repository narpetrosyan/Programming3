function main() {
    var socket = io.connect('http://localhost:3000');
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var button1 = document.getElementById('delete');


    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }

    button.onclick = handleSubmit;
    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }

    function delm(a) {
        socket.emit("delete message");
    }

    button1.onclick = delm;
    function deletemessage() {
        
        child.parentNode.removeChild(p);

    }

    socket.on('display message', handleMessage);
    socket.on("deletid message", deletemessage)
} // main closing bracket

window.onload = main;