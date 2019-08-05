import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { NoteService } from '../note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../note.interface';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit, DoCheck {

  note: Note = {
    id: 0,
    title: '',
    content: ''
  };

  noteTitlePlaceholder = '';
  noteContentPlaceholder = '';

  mode = NoteDetailComponentMode.Detail;

  constructor(private noteService: NoteService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    let noteId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.params.subscribe(params => {
      if (!isNullOrUndefined(params)) {
        console.log(params);
        if (params.id === 'create') {
          this.mode = NoteDetailComponentMode.Create;
          noteId = 0;
        } else {
          this.mode = NoteDetailComponentMode.Detail;
        }
        this.updatedMode(noteId);
      }
    });
  }

  ngDoCheck() {

  }

  getNote(id: number) {
    const existingNote = this.noteService.getNote(+id);
    if (isNullOrUndefined(existingNote)) {
      // fallback method... not gonna do it.
    } else {
      this.note.id = existingNote.id;
      this.note.title = existingNote.title;
      this.note.content = existingNote.content;
      this.ngDoCheck();
    }
  }

  startCreate() {
    console.log('create');
    this.noteTitlePlaceholder = 'Awesome Title';
    this.noteContentPlaceholder = 'Your great note';
  }

  updatedMode(id: number) {
    switch (this.mode) {
      case NoteDetailComponentMode.Create: this.startCreate(); break;
      case NoteDetailComponentMode.Detail: this.getNote(id); break;
    }
  }

  onCreate() {
    console.log('dada');
    const note = this.noteService.createNote(this.note);
    if (!isNullOrUndefined(note)) {
      this.router.navigate(['/note/', note.id]).then(() => {
      window.location.reload();
    });
    }
  }

  onUpdate() {
    this.noteService.updateNote(this.note);
    window.location.reload();
  }
}

enum NoteDetailComponentMode {
  Detail,
  Create
}
