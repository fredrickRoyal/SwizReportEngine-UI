import { Injectable } from '@angular/core'
import { TemplateDTO } from './Template.dto'

@Injectable({ providedIn: 'root' })
export class TemplateService {

    templates: TemplateDTO[] = [
        {
            "id": "iuhhere98232",
            "fileName": "Learner attendence report.docs",
            "datePublished": "21/11/20202",
            "publishedBy": "Fredrick Kasoma",
            "documentType": "template",
            "description": "learner attendance report",
            "publishStatus": "published",
            "folder": "/templates",
            "refId": "o0993283",
            "filePath": "/templates/o0993283",
            "fileType": "doc"
        }, {
            "id": "iuhhere98232",
            "fileName": "Learner attendence report.docs",
            "datePublished": "21/11/20202",
            "publishedBy": "Fredrick Kasoma",
            "documentType": "template",
            "description": "learner attendance report",
            "publishStatus": "published",
            "folder": "/templates",
            "refId": "o0993283",
            "filePath": "/templates/o0993283",
            "fileType": "doc"
        }
    ]

    getUploadedTemplates() {
        return this.templates;
    }

}

