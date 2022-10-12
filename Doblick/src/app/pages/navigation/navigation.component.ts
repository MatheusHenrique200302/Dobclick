import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { faDashboard, faBoxArchive,faChartLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'AppLayout',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  faDashboard = faDashboard;
  faBoxArchive = faBoxArchive;
  faChartLine = faChartLine;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private router:Router) {}

      logout(){
       this.router.navigateByUrl('login');
      }

}
