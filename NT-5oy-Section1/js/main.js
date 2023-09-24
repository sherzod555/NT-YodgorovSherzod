import { posts, ownPosts, categories, subscriptions } from './data.js';


const $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

const $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};


const ownPostWrapper = $_('.ownpost_wrapper');
const ownPostTemplate = $_('.ownpost_template').content;

const recPostWrapper = $_('.rec_wrapper');
const recPostTemplate = $_('.rec_template').content;

const asideLinks = $_('.aside_home_section');

const subWrapper = $_('.aside_subs');
const subTemplate = $_('.aside_subs_template').content;

const otherPostWrapper = $_('.other_post_wrapper');
const otherTemplate = $_('.other_template').content;


// ///////////////////////////////////////////
const recommendedPosts = posts.filter(post => post.type === 'recommended');
const foodPosts = posts.filter(post => post.type === 'food');
// ////////////////////////////////////////////



const displayOwnposts = function (ownPosts) {
  const ownpostsFragment = document.createDocumentFragment();
  // ownPostWrapper.innerHTML="";

  ownPosts.forEach((ownPost) => {
    const ownWrapperClone = ownPostTemplate.cloneNode(true);

    $_('.own_video_img', ownWrapperClone).src = ownPost.thumbnail;
    $_('.video_name', ownWrapperClone).textContent = ownPost.title;
    $_('.vid_view', ownWrapperClone).textContent = ownPost.views;
    $_('.vid_auth', ownWrapperClone).textContent = ownPost.author;

    ownpostsFragment.appendChild(ownWrapperClone);
  });
  ownPostWrapper.appendChild(ownpostsFragment);
};

// const displayRecPosts = function (posts) {
//   const recpostsFragment = document.createDocumentFragment();
//   // ownPostWrapper.innerHTML="";

//   posts.forEach((post) => {
//     const recWrapperClone = recPostTemplate.cloneNode(true);

//     $_('.rec_video_img', recWrapperClone).src = post.thumbnail;
//     $_('.rec_video_name', recWrapperClone).textContent = post.title;
//     $_('.vid_view', recWrapperClone).textContent = post.views;
//     $_('.vid_auth', recWrapperClone).textContent = post.author;

//     recpostsFragment.appendChild(recWrapperClone);
//   });
//   recPostWrapper.appendChild(recpostsFragment);
// };


// Display recommended posts
const displayRecPosts = function (recommendedPosts) {
    const recpostsFragment = document.createDocumentFragment();
  
    recommendedPosts.forEach((post) => {
      const recWrapperClone = recPostTemplate.cloneNode(true);
  
      $_('.rec_video_img', recWrapperClone).src = post.thumbnail;
      $_('.rec_video_name', recWrapperClone).textContent = post.title;
      $_('.vid_view', recWrapperClone).textContent = post.views;
      $_('.vid_auth', recWrapperClone).textContent = post.author;
  
      recpostsFragment.appendChild(recWrapperClone);
    });
    recPostWrapper.appendChild(recpostsFragment);
  };


  // Display food posts
const displayOtherPosts = function (foodPosts) {
    const otherPostsFragment = document.createDocumentFragment();
  
    foodPosts.forEach((post) => {
      const otherWrapperClone = otherTemplate.cloneNode(true);
  
      $_('.other_video_img', otherWrapperClone).src = post.thumbnail;
      $_('.other_video_name', otherWrapperClone).textContent = post.title;
      $_('.vid_view', otherWrapperClone).textContent = post.views;
      $_('.vid_auth', otherWrapperClone).textContent = post.author;
  
      otherPostsFragment.appendChild(otherWrapperClone);
    });
    otherPostWrapper.appendChild(otherPostsFragment);
  };
  






const displayCategories = function (categories) {
  categories.forEach((category) => {
    const categoryEl = `
        <a href="#" class="aside_home_items">
            <img src="${category.icon}" alt="subscribers" class="white_icon" />
            <p class="aside_home_title">${category.title}</p>
        </a>`;

    asideLinks.insertAdjacentHTML('beforeend', categoryEl);
  });
};

const displaySubs = function(subscriptions) {
    const subsFragment = document.createDocumentFragment();
    subscriptions.forEach((subscription) => {
        const subWrapperClone = subTemplate.cloneNode(true);
    
        $_('img', subWrapperClone).src = subscription.avatar;
        $_('.aside_subs_title', subWrapperClone).textContent = subscription.title;
    
        subsFragment.appendChild(subWrapperClone);
    });
    subWrapper.appendChild(subsFragment);
}

displayOwnposts(ownPosts);
// displayRecPosts(posts);
displayCategories(categories);
displaySubs(subscriptions);
displayRecPosts(recommendedPosts);
displayOtherPosts(foodPosts);










// Call the functions to display posts
