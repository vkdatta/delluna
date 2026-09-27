export const name="video-camera-slash-fill";
export const id="dl_4c5406a298b1a416f41b";
export const url=new URL("../icons/video-camera-slash-fill.svg?v=fdeb5bb322b363d3fe6f56b6abe65d0d1b5b662024958a5c9cd7bf0d45643b3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
