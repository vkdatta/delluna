export const name="video-conference-fill";
export const id="dl_306a95ae3de2493eae4b";
export const url=new URL("../icons/V/video-conference-fill.svg?v=a314960a5b7017309f40026bf94de9925c9f8147426f465c3544fc321dcda2fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
