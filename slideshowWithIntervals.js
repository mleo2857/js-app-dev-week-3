var slideshow = {
  photoList : ['family','vacation','party','trip','car','graduation','birthday'],

  currentPhotoIndex : 0,

  nextPhoto: function(){
    if (this.currentPhotoIndex === this.photoList.length - 1){
      console.log('End of slideshow');
      this.pause();
    } else {
      console.log(this.photoList[this.currentPhotoIndex]);
      this.currentPhotoIndex += 1;
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
    var self = this;

    this.playInterval = setInterval(function(){
      self.nextPhoto();
    }, 2000);
  },

  pause: function(){
    clearInterval(this.playInterval);
  }
}

slideshow.play()
