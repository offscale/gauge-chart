/**
 * @category   Model
 * @package    com.kiwity.gauge.gauge
 * @author     Salvador Subarroca (subarroca@gmail.com)
**/
export declare class GaugeSegment {
    radius: number;
    goal: number;
    value: number;
    color: string;
    bgColor: string;
    borderWidth: number;
    constructor(options?: {
        radius?: number;
        goal?: number;
        value?: number;
        color?: string;
        bgColor?: string;
        borderWidth?: number;
    });
    get computedRadius(): number;
    get strokeProgress(): string;
    get strokeEmptyProgress(): string;
}
