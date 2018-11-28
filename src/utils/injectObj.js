import wepy from 'wepy';
import {
  back,
  link,
  redirect,
  reLaunch,
  toast,
  modal,
  loading
} from './index';

Object.assign(wepy.component.prototype, {
  $back: back,
  $toast: toast,
  $modal: modal,
  $loading: loading,
  $link: link,
  $redirect: redirect,
  $reLaunch: reLaunch
});
