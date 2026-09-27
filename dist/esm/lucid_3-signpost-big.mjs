export const name="lucid_3-signpost-big";
export const id="dl_c2ecc450dd9d46b4a1a1";
export const url=new URL("../icons/lucid_3-signpost-big.svg?v=e99e971a84e688cc235cf4b7a2a244034461c2be0118b5e82a1fa7d5420fdbde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
