export const name="video_stable-fill";
export const id="dl_840f1dedac7562b299cd";
export const url=new URL("../icons/video_stable-fill.svg?v=0036641491bf9febe2660c67354b2381aa2cebfe41c236764078d31c01a62f9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
