import { IStoryboard } from "./Idomoo";


export interface IGenerateVideoRequest extends IStoryboard {
    format:string,
    quality:number,
    height:number
}