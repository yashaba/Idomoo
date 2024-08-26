export interface IStoryboardData {
    key: string;
    val: string;
    description: string;
  }
  
  export interface IStoryboard {
    storyboard_id: number;
    name: string;
    thumbnail_time: number;
    width: number;
    height: number;
    thumbnail: string;
    data: IStoryboardData[];
    last_modified: number;
    last_modified_string: string;
  }
  