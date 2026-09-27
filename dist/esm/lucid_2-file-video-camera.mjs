export const name="lucid_2-file-video-camera";
export const id="dl_f4fa5eea1f2940aabfc3";
export const url=new URL("../icons/lucid_2-file-video-camera.svg?v=a6704ebc529197802ed57ecc68f3314c8c985f62109f614432adb9e4f4e4adbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
