export const name="ventilator-fill";
export const id="dl_65dc1feac06c4eb19a4c";
export const url=new URL("../icons/ventilator-fill.svg?v=f1b0c39668b301266a63e011d4c73198f6f1d4606cacc370afae5e5fd4433680",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
