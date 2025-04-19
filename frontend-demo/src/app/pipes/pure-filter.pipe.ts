import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureFilter',
  pure: false
})
export class PureFilterPipe implements PipeTransform {

  transform(users:any[],role:string): any[] {
    
    console.log("this is pure pipe")
    return users.filter(user => user.role ===role);
  }

}
