import { Injectable, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { Note } from './note.interface';
import { CookieService } from 'ngx-cookie-service';
import { isNullOrUndefined } from 'util';

export enum NoteKeys {
    Notes = 'NOTES'
}

@Injectable()
export class NoteService {

    constructor(private cookieService: CookieService) {

    }

    getNotes(): Note[] {
        const noteString: string = this.cookieService.get(NoteKeys.Notes);
        let notes: Note[] = [];
        try {
            notes = JSON.parse(noteString);
        } catch {}
        return notes;
    }

    createNote(note: Note): boolean {
        let notesString: string;
        const notes = this.getNotes();
        note.id = this.getUniqueIdentifier();
        notes.push(note);
        try {
            notesString = JSON.stringify(notes);
        } catch {
            return false;
        }
        this.cookieService.set(NoteKeys.Notes, notesString);
        return true;
    }

    updateNote(note: Note): boolean {
        let notesString: string;
        const notes = this.getNotes();
        let foundIndex: number;
        notes.forEach((item, index) => {
            if (item.id === note.id) {
                foundIndex = index;
            }
        });
        if (isNullOrUndefined(foundIndex)) {
            return false;
        }
        notes[foundIndex] = note;
        try {
            notesString = JSON.stringify(notes);
        } catch {
            return false;
        }
        this.cookieService.set(NoteKeys.Notes, notesString);
        return true;
    }

    getUniqueIdentifier(): number {
        const notes = this.getNotes();
        const maxIdentifier = 1000000;
        const minIdentifier = notes.length;
        let entryExists = false;
        let randomId = 0;
        do {
            randomId = Math.floor(Math.random() * (maxIdentifier - minIdentifier + 1) + minIdentifier);
            const existingEntry = notes.filter((note) => {
                return note.id === randomId;
            });
            if (!isNullOrUndefined(existingEntry[0])) {
                entryExists = true;
            }
        } while (entryExists);

        return randomId;
    }
}
