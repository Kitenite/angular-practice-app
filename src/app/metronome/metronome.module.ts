import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// External libraries
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AudioContextModule } from 'angular-audio-context';

// Custom components
import { MetronomeRoutingModule } from './metronome-routing.module';
import { MetronomeComponent } from './components/metronome.component';

const socketConfig: SocketIoConfig = { url: 'https://kallis-practice.herokuapp.com', options: {} };

@NgModule({
  declarations: [MetronomeComponent],
  imports: [
    CommonModule,
    MetronomeRoutingModule,
    SocketIoModule.forRoot(socketConfig),
    AudioContextModule.forRoot('balanced')
  ]
})
export class MetronomeModule { }