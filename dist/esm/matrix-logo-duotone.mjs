export const name="matrix-logo-duotone";
export const id="dl_cc7a0b55adec4987a9a6";
export const url=new URL("../icons/matrix-logo-duotone.svg?v=84ff6ec3ba87c0a35210481389919f55a022b585714e680c56c42c44653144db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
