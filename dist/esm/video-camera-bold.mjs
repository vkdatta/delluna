export const name="video-camera-bold";
export const id="dl_ebdcd48d5da073166316";
export const url=new URL("../icons/video-camera-bold.svg?v=aef8d4b0a06783922ba3c4983141238fd91ec15b022cfe2465dcd786ad693271",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
