import { SelectionModel } from '@angular/cdk/collections';
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
        'select',
        'id',
        'fileName',
        'datePublished',
        'publishedBy',
        'description',
        'publishStatus',
        'folder',
        'refId',
        'filePath',
        'fileType'];


    selection = new SelectionModel<TemplateDTO>(true, []);


    /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: TemplateDTO): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${1}`;
  }

    dataSource: MatTableDataSource<TemplateDTO>;


    templates: TemplateDTO[] = [];

    constructor(private templateService: TemplateService, public dialog: MatDialog) {

        this.loadUploadedTemplates(); 
    }

    loadUploadedTemplates() {

        this.templateService.getUploadedTemplates().subscribe(response => {

            this.templates = response.data;

            this.dataSource = new MatTableDataSource(this.templates);

        });

    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    uploadTemplete() {

        const dialogRef = this.dialog.open(TemplateUploadComponet, {
            width: '400px'

        });

        dialogRef.afterClosed().subscribe(result => {

            console.log(`Dialog result: ${result}`);

            this.loadUploadedTemplates();
        });

        console.log("loading file upload window");
    }

    onRefresh() {
        this.loadUploadedTemplates();
    }


}