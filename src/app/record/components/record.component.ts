import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { VideoRecordingService } from '../services/video-recording.service'
@Component({
  selector: 'record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements AfterViewInit{

  @ViewChild('video') videoView;
  video:HTMLVideoElement;
  isRecording: boolean = false;

  constructor(
    private videoRecordingService:VideoRecordingService
  ) {}

  ngAfterViewInit() {
    // set the initial state of the video
    this.video = this.videoView.nativeElement;
    console.log(this.video.controls)
    this.video.controls = false;
  }

  startRecording() {
    let mediaConstraints = {
      video: true,
      audio: true
    };
    this.videoRecordingService.initRecording(mediaConstraints).then((stream)=>{
      this.videoRecordingService.startRecording(stream);
      this.video.srcObject = stream;
      this.isRecording = true
    })
  }

  stopRecording() {
    this.videoRecordingService.stopRecording(this.processVideo.bind(this));
    this.isRecording = false;
  }

  processVideo(audioVideoWebMURL) {
    this.video.pause();
    this.video.srcObject = null;
    this.video.src = audioVideoWebMURL;
    this.video.load();
  }

  download() {
    this.videoRecordingService.downloadVideo();
  }
}