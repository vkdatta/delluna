export const name="thumbnail_bar-fill";
export const id="dl_cc5a013cb00d7f1007b6";
export const url=new URL("../icons/thumbnail_bar-fill.svg?v=b73c10127f6c59541274bbbc4737fb32f49145cd53a230fb2ebb7fe7217ab34f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
