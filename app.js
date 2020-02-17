$(document).ready(function() {
  const $post = $(".posts");
  // Tweet btn
  let myTweet = $(".myTweet");
  myTweet.on("keypress", function() {
    $(".myTweetBtn").css({ opacity: 1 });
  });
  // Press Enter To Tweet
  $(".myTweet").keydown(function(e) {
    if (e.which === 13) {
      $("#hellForm").submit();
    }
  });

  // Add Tweets
  $("#hellForm").submit(function(e) {
    e.preventDefault();
    let now = moment().fromNow();
    let user = $("#username").val();
    let message = $(".myTweet").val();
    let tweetDiv = $("<div></div>");
    tweetDiv.addClass("myPost");
    let pic = "https://picsum.photos/200";
    let posts = `<img src=${pic} alt="pug" width="50px" height="50px">
              <div class="text"><h3><a href="user.html?user=${user}&img=${pic}">${user}</a></h3><p>${message}</p><small class="text-muted">${now}</small></div>`;
    tweetDiv.html(posts);
    $post.prepend(tweetDiv);
  });
  // human-readable time

  // Tweet Panel
  for (let i = streams.home.length - 1; i > 0; i--) {
    let time = moment()
      .startOf("day")
      .fromNow();
    getUser().then(gitUser => {
      let tweetDiv = $("<div></div>");
      tweetDiv.addClass("myPost");
      let posts = `<img src=${gitUser[i]} width="50px" height="50px">
              <div class="text"><h3><a href="user.html?user=${streams.home[i].user}&img=${gitUser[i]}">${streams.home[i].user}</a></h3><p>${streams.home[i].message}</p><small class="text-muted">${time}</small></div>`;
      tweetDiv.html(posts);
      $post.append(tweetDiv);
    });
  }

  // load more posts in a given interval
  function loadPosts() {
    for (let i = streams.home.length - 1; i > 0; i--) {
      let time = moment()
        .startOf("day")
        .fromNow();
      getUser().then(gitUser => {
        let tweetDiv = $("<div></div>");
        tweetDiv.addClass("myPost");
        let posts = `<img src=${gitUser[i]} width="50px" height="50px">
                <div class="text"><h3><a href="user.html?user=${streams.home[i].user}&img=${gitUser[i]}">${streams.home[i].user}</a></h3><p>${streams.home[i].message}</p><small class="text-muted">${time}</small></div>`;
        tweetDiv.html(posts);
        $post.append(tweetDiv);
      });
    }
  }
  setInterval(loadPosts, 5000);

  for (let i = 0; i < 5; i++) {
    // Trands for you
    const { message } = streams.home[i];
    let trendsForYou = $("<li>");
    trendsForYou.addClass("list-group-item");
    trendsForYou.html(`<a href="#">${message}</a>`);
    $(".list-1 .list-group").append(trendsForYou);
    // Who to follow
    let whoToFollow = $("<li>");
    whoToFollow.addClass("list-group-item");
    whoToFollow.html(`<a href="#">${users[i]}</a>`);
    $(".list-2 .list-group").append(whoToFollow);
  }
  // Github avatar
  function getUser() {
    return fetch("https://api.github.com/users")
      .then(res => res.json())
      .then(data => {
        return data.map(item => item.avatar_url);
      })
      .catch(err => console.log(err));
  }
});
