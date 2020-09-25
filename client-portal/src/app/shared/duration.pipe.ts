import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'duration'
})

export class DurationPipeComponent implements PipeTransform {

    transform(value: number): string {
        switch(value) {
            case 1: return 'One Hour';
            case 2: return 'Two Hours';
            case 3: return 'Three Hours';
            default: return value.toString();
        }
    }
}