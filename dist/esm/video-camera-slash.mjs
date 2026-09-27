export const name="video-camera-slash";
export const id="dl_344a43991e3119cf14ea";
export const url=new URL("../icons/video-camera-slash.svg?v=ffb99ede81f6f3ab8035d57d768b66a4681e75a1eedb4be411ee50732a400791",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
