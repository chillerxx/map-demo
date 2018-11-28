import wepy from 'wepy';

export function link(url) {
  wx.navigateTo({
    url: url
  });
}

export function redirect(url) {
  wx.redirectTo({
    url: url
  })
}

export function reLaunch(url) {
  wx.reLaunch({
    url: url
  })
}

export function back() {
  wx.navigateBack({
    delta: 2
  });
}

export function toast(title, type = 'none', duration = 2000, onHide) {
  if (!title) return;
  setTimeout(() => {
    wepy.showToast({
      title: title,
      icon: type,
      mask: true,
      duration: duration
    });
  }, 300);
  if (onHide) {
    setTimeout(() => {
      onHide();
    }, duration);
  }
}

export function modal(title, content, showCancel = false) {
  return wepy
    .showModal({
      title,
      content,
      showCancel
    })
    .then(data => data.confirm);
}

export function loading(title = '加载中...', mask = true) {
  if (title) {
    return wepy.showLoading({ title, mask });
  } else {
    return wepy.hideLoading();
  }
}