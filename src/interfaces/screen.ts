export interface Screen {
  screenX: number;
  screenY: number;
  status: 'online' | 'offline';
  core: Function | any;
}
