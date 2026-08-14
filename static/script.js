async function sendMessage(){

    let input=document.getElementById("user-input");

    let message=input.value.trim();

    if(message==="") return;

    let chat=document.getElementById("chat-box");

    chat.innerHTML+=`
    <div class="user-message">
        ${message}
    </div>
    `;
    chat.scrollTop = chat.scrollHeight;

    // Show typing animation
chat.innerHTML += `
<div class="bot-message typing-message">
    🤖 AI is typing...
</div>
`;

chat.scrollTop = chat.scrollHeight;
    

    let response=await fetch("/chat",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({

            message:message

        })

    });

    let data = await response.json();

await new Promise(resolve => setTimeout(resolve,1000));
    document.querySelector(".typing-message").remove();

    chat.innerHTML+=`
    <div class="bot-message">
        ${data.response}
    </div>
    `;

    input.value="";

    chat.scrollTop=chat.scrollHeight;

}
document.getElementById("user-input").addEventListener("keypress", function(event){

    if(event.key==="Enter"){

        sendMessage();

    }

});