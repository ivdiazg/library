import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { LibraryService } from '../../services/library.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
    let data: any;
    data = this.libraryService.obtieneEstados();
    console.log(data);

    const DATA = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
        [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
      ]
    };

    const OPTIONS = {
      seriesBarDistance: 10,
      axisX: {
        showGrid: false
      },
      height: '245px'
    };

    const RESPONSIVEOPTIONS: any[] = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];

    // tslint:disable-next-line:no-unused-expression
    new Chartist.Line('#chartActivity', DATA, OPTIONS, RESPONSIVEOPTIONS);

    const DATAPREFERENCES = {
      series: [
        [25, 30, 20, 25]
      ]
    };

    const OPTIONSPREFERENCES = {
      donut: true,
      donutWidth: 40,
      startAngle: 0,
      total: 100,
      showLabel: false,
      axisX: {
        showGrid: false
      }
    };

    // tslint:disable-next-line:no-unused-expression
    new Chartist.Pie('#chartPreferences', DATAPREFERENCES, OPTIONSPREFERENCES);

    // tslint:disable-next-line:no-unused-expression
    new Chartist.Pie('#chartPreferences', {
      labels: ['62%', '32%', '6%'],
      series: [62, 32, 6]
    });
  }

}
