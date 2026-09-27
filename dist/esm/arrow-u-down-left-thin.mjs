export const name="arrow-u-down-left-thin";
export const id="dl_aba4214d431147c8977f";
export const url=new URL("../icons/arrow-u-down-left-thin.svg?v=bce96b9a4eccf36d1b157b4a20e18460163579133e3ae0d33fc8cf86657082f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
