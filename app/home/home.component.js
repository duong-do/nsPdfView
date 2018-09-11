"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fs = require("file-system");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.filename = "documents/myPdf.pdf";
        this.path = fs.path.join(fs.knownFolders.currentApp().path, this.filename);
        console.log(this.path);
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log("in homr onint");
        // this.pdfpath = "https://www.princexml.com/howcome/2016/samples/magic8/index.pdf";
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFxRTtBQUNyRSxnQ0FBa0M7QUFRbEM7SUFNRTtRQUxBLGFBQVEsR0FBVyxxQkFBcUIsQ0FBQztRQUN6QyxTQUFJLEdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBSzVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QixvRkFBb0Y7SUFDeEYsQ0FBQztJQWJVLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3RDLENBQUM7O09BQ1csYUFBYSxDQWN6QjtJQUFELG9CQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdab25lLCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZpbGUtc3lzdGVtXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmaWxlbmFtZTogc3RyaW5nID0gXCJkb2N1bWVudHMvbXlQZGYucGRmXCI7XG4gIHBhdGg6IHN0cmluZyA9IGZzLnBhdGguam9pbihmcy5rbm93bkZvbGRlcnMuY3VycmVudEFwcCgpLnBhdGgsIHRoaXMuZmlsZW5hbWUpO1xuICAvL3BhdGggPSAnfi9hcHAvZG9jdW1lbnRzL215UGRmLnBkZic7XG4gIHBkZnBhdGg6IGFueTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7IFxuICAgIGNvbnNvbGUubG9nKHRoaXMucGF0aCk7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCkge1xuICAgICAgY29uc29sZS5sb2coXCJpbiBob21yIG9uaW50XCIpO1xuICAgICAgLy8gdGhpcy5wZGZwYXRoID0gXCJodHRwczovL3d3dy5wcmluY2V4bWwuY29tL2hvd2NvbWUvMjAxNi9zYW1wbGVzL21hZ2ljOC9pbmRleC5wZGZcIjtcbiAgfVxufVxuIl19