import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TemplateService } from '../template.service';

@Component({
    selector: 'app-template-upload',
    templateUrl: './templateUpload.component.html',
    styleUrls: ['./templateUpload.component.scss']
})
export class TemplateUploadComponet {

    @ViewChild('fileInput') fileInput: ElementRef;

    fileAttr = 'Choose File';
    description = ''

    selectedFile: File = null;

    constructor(private httpClient: HttpClient, private snackBar: MatSnackBar, private templateService: TemplateService) {

    }

    uploadFileEvt(imgFile: any) {
        if (imgFile.target.files && imgFile.target.files[0]) {
            this.fileAttr = '';
            Array.from(imgFile.target.files).forEach((file: any) => {
                this.fileAttr += file.name + ' - ';
            });
            // HTML5 FileReader API
            let reader = new FileReader();
            reader.onload = (e: any) => {
                let image = new Image();
                image.src = e.target.result;
                image.onload = (rs) => {
                    let imgBase64Path = e.target.result;
                };
            };
            reader.readAsDataURL(imgFile.target.files[0]);
            // Reset if duplicate image uploaded again
            this.fileInput.nativeElement.value = '';
        } else {
            this.fileAttr = 'Choose File';
        }
    }

    onFileSelected(event: any) {
        this.fileAttr = '';
        this.selectedFile = <File>event.target.files[0];
        this.fileAttr = this.selectedFile.name;
        this.description = this.selectedFile.name.split(".")[0];
        //console.log(event);
    }

    onUpload() {

        const formData = new FormData();
        formData.append('file', this.selectedFile);
        formData.append('description', this.description);

        console.log("Now uploading: " + this.selectedFile.name);

        this.templateService.onUpload(formData).subscribe(resp => {

            if (resp.status) {

                this.fileAttr = '';
                this.description = ''

                this.snackBar.open("Template successfully uploaded", "Ok", {
                    duration: 2000,
                });
            } else {

                this.snackBar.open("" + resp.message, "Ok");
            }
        });

    }



} 