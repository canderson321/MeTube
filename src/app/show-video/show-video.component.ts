import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-show-video',
  templateUrl: './show-video.component.html',
  styleUrls: ['./show-video.component.css']
})
export class ShowVideoComponent implements OnInit {

  videoId:string;

  constructor(public sanitizer: DomSanitizer, private route: ActivatedRoute, private location: Location) {
    this.route.params.forEach((urlParameters) => {
      this.videoId = urlParameters['id'];
    });
    console.log(this.videoId);
  }

  ngOnInit() {

  }

  getEmbedUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.videoId + "?autoplay=1");
  }

}
