import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../note.interface';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {

  note: Note;

  constructor(private noteService: NoteService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const noteId = this.activatedRoute.snapshot.paramMap.get('id');
    
  }

}
