import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../note.interface';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {

  note: Note = {
    id: 0,
    title: '',
    content: ''
  };

  constructor(private noteService: NoteService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    let noteId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.params.subscribe(params => {
      if (!isNullOrUndefined(params)) {
        noteId = +params.id;
        const existingNote = this.noteService.getNote(noteId);
        if (isNullOrUndefined(existingNote)) {
          // fallback method... not gonna do it.
        } else {
          this.note = existingNote;
        }
      }
    });
  }

}
