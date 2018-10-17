var slideshow = {
  photoList : ['family','vacation','party','trip','car','graduation','birthday'],

  currentPhotoIndex : 0,

  nextPhoto: function(){
    if (this.currentPhotoIndex === this.photoList.length - 1){
      console.log('End of slideshow');
    } else {
      this.currentPhotoIndex += 1;
      console.log(this.photoList[this.currentPhotoIndex]);
    }
  },

  prevPhoto: function(){
    if (this.currentPhotoIndex === 0){
      console.log('End of slideshow');
    } else {
      this.currentPhotoIndex -= 1;
      console.log(this.photoList[this.currentPhotoIndex]);
    }
  },

  getCurrentPhoto: function(){
    return this.photoList[this.currentPhotoIndex];
  },

  playInterval: null,

  play: function(){
    this.playInterval = setInterval(function(){
      this.nextPhoto();
    }, 2000);
  }

  // pause: function(){
  //
  // }
}

slideshow.play()
