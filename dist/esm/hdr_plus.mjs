export const name="hdr_plus";
export const id="dl_30c12e8776824f569eb2";
export const url=new URL("../icons/H/hdr_plus.svg?v=a65b743ca8014f2c68a226532ecc4a7c6018e2d1259a07c637d2d601d994dca3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
