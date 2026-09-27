export const name="lucid_2-gift";
export const id="dl_c308e3a8301a4b9b8b77";
export const url=new URL("../icons/lucid_2-gift.svg?v=8da6ed65b77d9456d80992f26947052003050ad984d5668a033ef00145171918",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
