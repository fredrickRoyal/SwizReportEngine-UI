import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TemplateUploadComponet } from './dialogs/templateUpload.component';
import { TemplateDTO } from './Template.dto';
import { TemplateService } from './template.service';

@Component({
    selector: 'app-template',
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.scss']
})
export class TemplateComponent {

    show: boolean = true;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    @ViewChild(TemplateUploadComponet) uploadDialog!: TemplateUploadComponet

    columnHeaderNames: string[] = [
        'id',
        'fileName',
        'datePublished',
        'publishedBy',
        'documentType',
        'description',
        'publishStatus',
        'folder',
        'refId',
        'filePath',
        'fileType'];

    dataSource: MatTableDataSource<TemplateDTO>;

    constructor(private templateService: TemplateService, public dialog: MatDialog) {

        this.dataSource = new MatTableDataSource(templateService.getUploadedTemplates());
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    uploadTemplete() {
          
        const dialogRef = this.dialog.open(TemplateUploadComponet,{
            width: '400px'

          });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });

        console.log("loading file upload window");
    }


}