import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { map } from 'rxjs';
import { ResponseData } from '../ResponseData';
import { TemplateDTO } from './Template.dto'

@Injectable({ providedIn: 'root' })
export class TemplateService {

    constructor(private httpClient: HttpClient) {

    }

    getUploadedTemplates() {

        return this.httpClient.get<ResponseData<TemplateDTO[]>>("http://localhost:1500/templates/all");
    }

    onUpload(formData: FormData) {

        return this.httpClient.post<ResponseData<String>>("http://localhost:1500/templates/upload", formData);

    }

}


