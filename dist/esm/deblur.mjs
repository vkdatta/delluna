export const name="deblur";
export const id="dl_18242b708ee5823fd091";
export const url=new URL("../icons/deblur.svg?v=7b3c5dd61b500f6e58619441b57a5d81b84cfc3316491dcf7988e2ae5252a54f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
