export interface IStoryBoardData {
  key: string;
  val: string;
  description: string;
}

export interface IStoryBoard {
  storyboard_id: number;
  name: string;
  thumbnail_time: number;
  width: number;
  height: number;
  thumbnail: string;
  data: IStoryBoardData[];
  last_modified: number;
  last_modified_string: string;
}





