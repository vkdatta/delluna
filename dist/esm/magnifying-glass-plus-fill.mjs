export const name="magnifying-glass-plus-fill";
export const id="dl_8291e20c743e49ff89eb";
export const url=new URL("../icons/magnifying-glass-plus-fill.svg?v=5defb72842ac8364cb22ec3ef2ab0a7980ed82310d60d637aa3372fe020186b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
