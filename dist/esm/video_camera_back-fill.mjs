export const name="video_camera_back-fill";
export const id="dl_2763679210447934ae7f";
export const url=new URL("../icons/video_camera_back-fill.svg?v=d3cd9cd30601ed010abf120fa7a628aef9aee9cd511ed561a799f8b50a116bea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
