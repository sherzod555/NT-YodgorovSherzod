//  https://jsonplaceholder.typicode.com/posts


    const $_ = function (selector, node = document) {
        return node.querySelector(selector);
    };



    const wrapperElement = $_(".card_wrapper");
    const template = $_(".box_template").content;
    const dataFragment = document.createDocumentFragment();

    const commentTemplate = $_(".comments_template").content;
    const comFragment = document.createDocumentFragment();
    const commentWrapper = $_(".comments_wrapper");


    const loader = $_(".loader_container")


    loader.style.display = "none";



    wrapperElement.innerHTML="";




    const displayPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    data.forEach((element) => {
        const cardItem = template.cloneNode(true);
        
        $_(".post_title", cardItem).textContent = element.title;
        $_(".post_body", cardItem).textContent = element.body;
        $_(".card_box", cardItem).setAttribute("data-id", element.id);
        
        dataFragment.appendChild(cardItem);

    });
        
    wrapperElement.appendChild(dataFragment);
};

displayPosts();



wrapperElement.addEventListener("click", async (evt) => {
    evt.preventDefault();
    commentWrapper.innerHTML="";
    loader.style.display = "block";


    try {
        if (evt.target.matches(".card_box")){
            // console.log(evt.target.dataset.id);
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${evt.target.dataset.id}/comments`);
            
            const data = await response.json();
    
            
    
            // console.log(data);
    
            data.forEach((element) => {
                const commentItem = commentTemplate.cloneNode(true);
                
                $_(".comment_name", commentItem).textContent = element.name;
                $_(".comment_body", commentItem).textContent = element.body;
                $_(".comment_box", commentItem).setAttribute("data-id", element.id);
                
                comFragment.appendChild(commentItem);
        
            });
                
            commentWrapper.appendChild(comFragment);
        
        }
        
    } catch (error) {
        alert("Somehing went wrong");
    } finally {
        loader.style.display = "none";
    }

});

