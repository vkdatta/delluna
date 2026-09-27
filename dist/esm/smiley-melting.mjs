export const name="smiley-melting";
export const id="dl_afbb991378ffe56a7235";
export const url=new URL("../icons/smiley-melting.svg?v=b226a707533948ad66f207c6b3b1a728aed71eb82068e8a4f46af15133e1cf40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
