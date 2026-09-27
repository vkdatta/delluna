export const name="mobile_wrench";
export const id="dl_ebc0c2bdfa9ecef06c5f";
export const url=new URL("../icons/mobile_wrench.svg?v=95b5a280304ee6a0e3d4a5ea0dd288eaa9203aa49b99a8cdc19e0fbb322fcb94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
