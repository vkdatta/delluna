export const name="circle-notch-fill";
export const id="dl_53a0702b16924f05bb3d";
export const url=new URL("../icons/circle-notch-fill.svg?v=2fcac4862730f5f6f0b0ff4126831bfcc738ca6010dcc558396a4e8f5c7e7580",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
