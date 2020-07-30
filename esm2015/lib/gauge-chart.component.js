import { Component, Input } from '@angular/core';
export class GaugeChartComponent {
    constructor() {
        this.bgRadius = 100;
        this.rounded = true;
        this.reverse = false;
        this.animationSecs = 0.5;
        this.segmentsLoaded = false;
        this.isIE11 = /Trident.*rv[ :]*11\./.test(navigator.userAgent);
    }
    set segments(segments) {
        this.segmentsLoaded = false;
        this.sortedSegments = this.sortSegments(segments);
        // wait a bit and start animation
        setTimeout(() => this.segmentsLoaded = true, 0);
    }
    ngOnInit() {
    }
    sortSegments(segments) {
        return segments && segments.sort((a, b) => {
            if (this.reverse) {
                return (a.value / a.goal > b.value / b.goal) ? 1 : -1;
            }
            return (a.value / a.goal > b.value / b.goal) ? -1 : 1;
        });
    }
}
GaugeChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-gauge-chart',
                template: "<svg viewBox=\"0 0 200 200\">\n  <g\n    class=kw-holder\n    [attr.transform]=\"isIE11 ? 'translate(100 100) rotate(-90)' : ''\">\n    <circle\n      class=kw-back\n      [attr.r]=\"bgRadius\"\n      [style.fill]=bgColor/>\n\n      <g\n        *ngFor=\"let segment of sortedSegments\">\n        <circle\n          class=kw-mid\n          [style.stroke]=segment.bgColor\n          [style.strokeWidth]=segment.borderWidth\n          [attr.r]=segment.computedRadius/>\n\n          <circle\n            class=kw-front\n\n            [style.transition]=\"'stroke-dasharray ' + animationSecs + 's'\"\n            [style.stroke]=segment.color\n            [style.strokeWidth]=segment.borderWidth\n            [style.strokeDasharray]=\"segmentsLoaded ? segment.strokeProgress : segment.strokeEmptyProgress\"\n            [style.strokeLinecap]=\"rounded ? 'round' : ''\"\n            [attr.r]=segment.computedRadius/>\n      </g>\n  </g>\n\n  <g\n    transform=\"translate(100, 100)\">\n    <text\n      class=kw-label\n      *ngFor=\"let label of labels\"\n      [attr.x]=label.x\n      [attr.y]=label.y\n      [style.fill]=label.color\n      [style.fontSize]=label.fontSize\n      text-anchor=middle>\n      {{label.text}}\n    </text>\n  </g>\n</svg>\n",
                styles: [".kw-front,.kw-mid{fill:transparent}.kw-holder{transform:translate(100px,100px) rotate(-90deg)}"]
            },] }
];
GaugeChartComponent.ctorParameters = () => [];
GaugeChartComponent.propDecorators = {
    bgRadius: [{ type: Input }],
    bgColor: [{ type: Input }],
    rounded: [{ type: Input }],
    reverse: [{ type: Input }],
    animationSecs: [{ type: Input }],
    labels: [{ type: Input }],
    segments: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2F1Z2UtY2hhcnQvc3JjL2xpYi9nYXVnZS1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFVekQsTUFBTSxPQUFPLG1CQUFtQjtJQTBCOUI7UUF6QlMsYUFBUSxHQUFHLEdBQUcsQ0FBQztRQUVmLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGtCQUFhLEdBQUcsR0FBRyxDQUFDO1FBZ0I3QixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUV2QixXQUFNLEdBQUcsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUcxQyxDQUFDO0lBakJqQixJQUNJLFFBQVEsQ0FBQyxRQUF3QjtRQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbEQsaUNBQWlDO1FBQ2pDLFVBQVUsQ0FDUixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksRUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBVUQsUUFBUTtJQUNSLENBQUM7SUFFRCxZQUFZLENBQUMsUUFBd0I7UUFDbkMsT0FBTyxRQUFRLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQWUsRUFBRSxDQUFlLEVBQUUsRUFBRTtZQUNwRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdkQ7WUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBM0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiwydUNBQTJDOzthQUU1Qzs7Ozt1QkFFRSxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLOzRCQUNMLEtBQUs7cUJBRUwsS0FBSzt1QkFFTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdhdWdlTGFiZWwgfSBmcm9tICcuL3NoYXJlZC9nYXVnZS1sYWJlbCc7XG5pbXBvcnQgeyBHYXVnZVNlZ21lbnQgfSBmcm9tICcuL3NoYXJlZC9nYXVnZS1zZWdtZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWdhdWdlLWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dhdWdlLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2F1Z2UtY2hhcnQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdhdWdlQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBiZ1JhZGl1cyA9IDEwMDtcbiAgQElucHV0KCkgYmdDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSByb3VuZGVkID0gdHJ1ZTtcbiAgQElucHV0KCkgcmV2ZXJzZSA9IGZhbHNlO1xuICBASW5wdXQoKSBhbmltYXRpb25TZWNzID0gMC41O1xuXG4gIEBJbnB1dCgpIGxhYmVsczogR2F1Z2VMYWJlbFtdO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBzZWdtZW50cyhzZWdtZW50czogR2F1Z2VTZWdtZW50W10pIHtcbiAgICB0aGlzLnNlZ21lbnRzTG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5zb3J0ZWRTZWdtZW50cyA9IHRoaXMuc29ydFNlZ21lbnRzKHNlZ21lbnRzKTtcblxuICAgIC8vIHdhaXQgYSBiaXQgYW5kIHN0YXJ0IGFuaW1hdGlvblxuICAgIHNldFRpbWVvdXQoXG4gICAgICAoKSA9PiB0aGlzLnNlZ21lbnRzTG9hZGVkID0gdHJ1ZSxcbiAgICAgIDApO1xuICB9XG5cbiAgc29ydGVkU2VnbWVudHM6IEdhdWdlU2VnbWVudFtdO1xuICBzZWdtZW50c0xvYWRlZCA9IGZhbHNlO1xuXG4gIGlzSUUxMSA9IC9UcmlkZW50LipydlsgOl0qMTFcXC4vLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgc29ydFNlZ21lbnRzKHNlZ21lbnRzOiBHYXVnZVNlZ21lbnRbXSk6IEdhdWdlU2VnbWVudFtdIHtcbiAgICByZXR1cm4gc2VnbWVudHMgJiYgc2VnbWVudHMuc29ydCgoYTogR2F1Z2VTZWdtZW50LCBiOiBHYXVnZVNlZ21lbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnJldmVyc2UpIHtcbiAgICAgICAgcmV0dXJuIChhLnZhbHVlIC8gYS5nb2FsID4gYi52YWx1ZSAvIGIuZ29hbCkgPyAxIDogLTE7XG4gICAgICB9XG4gICAgICByZXR1cm4gKGEudmFsdWUgLyBhLmdvYWwgPiBiLnZhbHVlIC8gYi5nb2FsKSA/IC0xIDogMTtcbiAgICB9KTtcbiAgfVxufVxuIl19