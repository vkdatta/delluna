export const name="17mp";
export const id="dl_428da11f2f63b8a5afb6";
export const url=new URL("../icons/17mp.svg?v=3618c1f09ecdcaa638ed8b38082779dacb267cfce43e25b1200e337b1f343d9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
