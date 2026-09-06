export const name="ranking-bold";
export const id="dl_ecfab4eacbaa4ef6afbe";
export const url=new URL("../icons/ranking-bold.svg?v=b0d3960719ee9790298bad132bac4193e028b3eaf5043f7e40828231bef1eb14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
