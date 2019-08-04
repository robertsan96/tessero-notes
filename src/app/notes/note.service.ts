import { Injectable } from '@angular/core';
import { Note } from './note.interface';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class NoteService {

    constructor(private cookieService: CookieService) {

    }

    getNotes(): Note[] {
        
        return [];
    }

    createNote(note: Note) {

    }
}
