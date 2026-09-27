export const name="shades_closed-fill";
export const id="dl_18ded7d4628148d46579";
export const url=new URL("../icons/shades_closed-fill.svg?v=7e7827edc17a443579502aace9e8916f226c16f36db779ee758265dbf13bd5ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
