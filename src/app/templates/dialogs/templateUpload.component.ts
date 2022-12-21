import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-template-upload',
    templateUrl: './templateUpload.component.html',
    styleUrls: ['./templateUpload.component.scss']
})
export class TemplateUploadComponet {

    @ViewChild('fileInput') fileInput: ElementRef;

    fileAttr = 'Choose File';

    selectedFile: File = null;

    constructor(private httpClient:HttpClient){

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
        this.fileAttr= this.selectedFile.name;
        console.log(event);
    }

    onUpload() { 

        const formData=new FormData();
        formData.append('file',this.selectedFile);
        this.selectedFile.name;
        console.log("Now uploading: "+this.selectedFile.name);

        this.httpClient.post("http://localhost:1500/templates/upload",formData).subscribe(resp=>{
            console.log(resp);
        });

    }

}