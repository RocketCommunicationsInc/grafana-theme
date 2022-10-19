type SeriesSize = 'sm' | 'md' | 'lg';
type CircleColor = 'blue' | 'green';

export interface SimpleOptions {
  text: string;
  showSeriesCount: boolean;
  seriesCountSize: SeriesSize;
  color: CircleColor;
}
