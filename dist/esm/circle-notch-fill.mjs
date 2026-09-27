export const name="circle-notch-fill";
export const id="dl_53a0702b16924f05bb3d";
export const url=new URL("../icons/circle-notch-fill.svg?v=d6307b981ef519750dc73fbc0831523823067e9ed41ca06cba811bcd35398cb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
