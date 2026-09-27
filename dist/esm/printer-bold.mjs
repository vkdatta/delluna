export const name="printer-bold";
export const id="dl_d7eb35a7e08a472a94a4";
export const url=new URL("../icons/printer-bold.svg?v=fb2ea37539679e231346e105e064302faf47e4144d0d76389f6c1f1a4df8c591",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
