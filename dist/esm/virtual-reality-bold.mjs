export const name="virtual-reality-bold";
export const id="dl_e34b167b49bd4cf48984";
export const url=new URL("../icons/V/virtual-reality-bold.svg?v=4d210085a711c80e06f0d34c05eb03ef56b28dde8a290f5d2e80d14b1469ad3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
