

document.querySelector('.container-createPlayList').style.display = "none";



document.querySelector('.feature-4-name').addEventListener('click',()=>{

    document.querySelector('.wrap-allContent').style.display = "none";
    document.querySelector('.container-Search').style.display = "none";
    document.querySelector('.container-Albums').style.display = "none";
    document.querySelector('.container-likedSong').style.display = "none";




    document.querySelector('.container-createPlayList').style.display = "block";

})

const createPlayList = () => {

  document.querySelector('.createPlayList-songs').children.length > 0 ? 
  document.querySelector('.createPlayList-songs').innerHTML = '' :null;

  obj.length > 0
    ? obj.forEach((item) => {
        const needObj = new createSongChart(
          item.image,
          item.songName,
          item.song,
          "createPlayList-songs"
        );
        renderBoxesOfSongs.songsBoxesRender.call(needObj);
      })
    : null;
};
