export const name="medical_mask-fill";
export const id="dl_6ae1c99429dbe5505778";
export const url=new URL("../icons/medical_mask-fill.svg?v=150c8d621e4ea680145fbbfd1885e8d5b3caa77a92f19b08f40b81b6fba46a05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
