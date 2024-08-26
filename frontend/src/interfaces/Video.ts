interface IVideoLink {
  url: string;
  landing_page_url: string;
  expired?: number;
  expired_string?: string;
}

interface IVideoOutput {
  format: string;
  quality: number;
  height: number;
  suffix: string;
  duration: number;
  cost: number;
  links: IVideoLink;
  label?: string;
}

interface IGifOutput {
  fps: number;
  height: number;
  time: number;
  duration: number;
  suffix: string;
  cost: number;
  links: IVideoLink;
  label?: string;
}

interface IJpgOutput {
  height: number;
  time: number;
  suffix: string;
  cost: number;
  links: { url: string };
  label?: string;
}

interface IAudioOutput {
  format: string;
  sample_rate: number;
  bit_depth: number;
  bitrate: number;
  channels: string;
  cost: number;
  links: { url: string };
}

interface ITranscriptLink {
  language: string;
  url: string;
}

interface ICaptionLink {
  language: string;
  url: string;
}

interface IAccessibilityOutput {
  transcript_links: ITranscriptLink[];
  caption_links: ICaptionLink[];
}

interface IOutput {
  video: IVideoOutput[];
  gif: IGifOutput[];
  jpg: IJpgOutput[];
  audio: IAudioOutput[];
  accessibility: IAccessibilityOutput;
}

interface IVideoResponse {
  output: IOutput;
  total_cost: number;
  check_status_url: string;
}

export {
  IVideoLink,
  IVideoOutput,
  IGifOutput,
  IJpgOutput,
  IAudioOutput,
  ITranscriptLink,
  ICaptionLink,
  IAccessibilityOutput,
  IOutput,
  IVideoResponse
};
