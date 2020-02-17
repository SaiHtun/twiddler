$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search);
  const user = urlParams.get("user");
  const userImage = urlParams.get("img");

  setInterval(generateRandomTweet, 1000);
  //   main username
  $(".card-body .userName").html(user);

  // top username
  $(".my-panel #tName").html(user);
  // tweet counts
  // profile pic
  let proPic = $(`<img
  style="height: 120px; width: 120px; border-radius: 60px; border: 1px solid #141d26;"
  src=${userImage}
  alt="profile-img"
  id="profile-img"
/>`);
  $(".my-profile-panel .card").append(proPic);

  // User tweets

  for (let i = streams.users[user].length - 1; i >= 0; i--) {
    let time = moment()
      .startOf("day")
      .fromNow();

    let tweetDiv = $("<div></div>");
    tweetDiv.addClass("myPost");
    let posts = `<img src=${userImage} width="50px" height="50px">
                <div class="text"><h3><a href="#">${user}</a></h3><p>${streams.users[user][i].message}</p><small class="text-muted">${time}</small></div>`;
    tweetDiv.html(posts);
    $(".my-tweet-panel").append(tweetDiv);
    const tweetCounts = streams.users[user].length;
    $(".tweetCount #count").html(tweetCounts);
  }

  function getMoreTweet() {
    let defaultArr = $(".myPost");
    for (let i = 0; i < defaultArr.length; i++) {
      defaultArr[i].remove();
    }
    for (let i = streams.users[user].length - 1; i >= 0; i--) {
      let time = moment()
        .startOf("day")
        .fromNow();

      let tweetDiv = $("<div></div>");
      tweetDiv.addClass("myPost");
      let posts = `<img src=${userImage} width="50px" height="50px">
                  <div class="text"><h3><a href="#">${user}</a></h3><p>${streams.users[user][i].message}</p><small class="text-muted">${time}</small></div>`;
      tweetDiv.html(posts);
      $(".my-tweet-panel").append(tweetDiv);
      const tweetCounts = streams.users[user].length;
      $(".tweetCount #count").html(tweetCounts);
      console.log(streams.users[user].length);
      console.log(streams.users[user]);
    }
  }
  console.log(streams.users[user].length);
  console.log(streams.users[user]);

  $("#mTweet").click(getMoreTweet);
});
