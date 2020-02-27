import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatPaginatorModule,
    MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
    MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatListModule, MatSelectModule, MatSnackBarModule
} from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';



/* Angular Flex Layout */
// import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatListModule,
        MatSelectModule,
        MatSnackBarModule, 
        MatPaginatorModule
        // FlexLayoutModule
    ],
    exports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatListModule,
        MatSelectModule,
        MatSnackBarModule,
        MatPaginatorModule
    ],
})
export class CustomMaterialModule { }