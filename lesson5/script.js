function main() {
    var socket = io.connect('http://localhost:3000');
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var del = document.getElementById('del');


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


    socket.on('display message', handleMessage);


    del.onclick = delMessage;

    function delMessage() {
        socket.emit('uzum em jnjem');
    }


    socket.on('dzer tagery jnjeq', deleteTags);

    function deleteTags() {
        var paragraphs = document.getElementsByTagName("p");

        for (var i in paragraphs) {
            paragraphs[0].remove();
            if(paragraphs.length == 0){
                break;
            }

        }
    }





} // main closing bracket

window.onload = main;