import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

/**Component Imports */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LogComponent } from './log/log.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { PositionsComponent } from './positions/positions.component';
import { PositionComponent } from './position/position.component';
import { ContentComponent } from './content/content.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';

/*Service imports*/ 
import { PositionService } from './data/position.service';
import { EmployeeService } from './data/employee.service'
import { LogService } from './data/log.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    LogComponent,
    PageNotFoundComponent,
    EmployeesComponent,
    EmployeeComponent,
    PositionsComponent,
    PositionComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MomentModule
  ],
  providers: [PositionService, LogService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
