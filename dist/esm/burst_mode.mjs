export const name="burst_mode";
export const id="dl_5db4264c2aa8bd840670";
export const url=new URL("../icons/burst_mode.svg?v=f6792e8e3b2b283c9626b597f5634057841c1ac160760a2cd8467710fc6891a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
