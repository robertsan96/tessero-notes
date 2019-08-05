import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/notes/note.service';
import { Note } from 'src/app/notes/note.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss']
})
export class LeftBarComponent implements OnInit {

  notes: Note[] = [];

  constructor(private noteService: NoteService, private router: Router) {
    this.notes = noteService.getNotes();
  }

  ngOnInit() {
    this.notes = this.noteService.getNotes();
    // let note: Note = {
    //   id: 0,
    //   title: 'dada',
    //   content: 'dadadada'
    // };
    // this.noteService.createNote(note);
  }

  didClickDelete(note: Note) {
    this.noteService.deleteNote(note.id);
    this.notes = this.noteService.getNotes();
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }

  didClickNote(note: Note) {
    this.router.navigate(['note/', note.id]).then(() => {
      window.location.reload();
    });
  }

  newNote() {
    this.router.navigate(['/note/create']).then(() => {
      window.location.reload();
    });
  }

}
