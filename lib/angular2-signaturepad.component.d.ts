import { AfterContentInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
export interface Point {
    x: number;
    y: number;
    time: number;
}
export declare type PointGroup = Array<Point>;
export declare class SignaturePad implements AfterContentInit, OnDestroy {
    options: any;
    onBeginEvent: EventEmitter<boolean>;
    onEndEvent: EventEmitter<boolean>;
    private signaturePad;
    private elementRef;
    constructor(elementRef: ElementRef);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    resizeCanvas(): void;
    toData(): Array<PointGroup>;
    fromData(points: Array<PointGroup>): void;
    toDataURL(imageType?: string, quality?: number): string;
    fromDataURL(dataURL: string, options?: any): void;
    clear(): void;
    isEmpty(): boolean;
    off(): void;
    on(): void;
    set(option: string, value: any): void;
    onBegin(): void;
    onEnd(): void;
    queryPad(): any;
}
