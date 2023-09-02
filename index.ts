console.clear();
import { AsyncSubject } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/subjects/asyncsubject
// Example 1: simple AsyncSubject

const sub = new AsyncSubject();

sub.subscribe(console.log);
sub.next(123); //nothing logged
sub.subscribe(console.log);

sub.next(456); //nothing logged
sub.complete(); //456, 456 logged by both subscribers
