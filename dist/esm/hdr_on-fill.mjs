export const name="hdr_on-fill";
export const id="dl_337a80a0b6f3b726a649";
export const url=new URL("../icons/hdr_on-fill.svg?v=8e8a15c227baff641cb930b8c3764889afd22a480fd645644b241ba917e662ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
