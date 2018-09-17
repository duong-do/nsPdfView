import { Component } from "@angular/core";
// >> fs-create-import-code
import { knownFolders, File, Folder } from "file-system";
import * as fs from "file-system";
// << fs-create-import-code
@Component({
  selector: "Create-file",
  moduleId: module.id,
  templateUrl: "./file.create.component.html"
})
export class FileCreateComponent {
    public folderName: string;
    public fileName: string;
    public fileTextContent: string;

    public successMessage: string;
    public writtenContent: string;
    public isItemVisible: boolean = false;

    public file: File;
    public folder: Folder;

    public onCreateFile() {
        // >> fs-create-all-code
        let documents = fs.knownFolders.currentApp();
        this.folder = documents.getFolder(this.folderName || "testFolder");
        this.file = this.folder.getFile((this.fileName || "testFile") + ".txt");

        this.file.writeText(this.fileTextContent || "some random content")
            .then(result => {
                this.file.readText()
                    .then(res => {
                        this.successMessage = "Successfully saved in " + this.file.path;
                        console.log(this.successMessage);
                        this.writtenContent = res;
                        console.log(this.writtenContent);
                        this.isItemVisible = true;
                    });
            }).catch(err => {
                console.log(err);
            });
        // << fs-create-all-code
    }
}