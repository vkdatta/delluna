export const name="video-camera-slash-thin";
export const id="dl_6100ea05104108ae8e6e";
export const url=new URL("../icons/video-camera-slash-thin.svg?v=657816c0f11caac73f3d3a2dddbf96b86028666a96d3b2550fcd390f15c1b18c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
