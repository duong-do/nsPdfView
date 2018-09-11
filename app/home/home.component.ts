import { Component, OnInit, NgZone, OnDestroy } from "@angular/core";
import * as fs from "file-system";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filename: string = "documents/myPdf.pdf";
  path: string = fs.path.join(fs.knownFolders.currentApp().path, this.filename);
  //path = '~/app/documents/myPdf.pdf';
  pdfpath: any;

  public constructor() { 
    console.log(this.path);
  }
  
  ngOnInit() {
      console.log("in homr onint");
      // this.pdfpath = "https://www.princexml.com/howcome/2016/samples/magic8/index.pdf";
  }
}
