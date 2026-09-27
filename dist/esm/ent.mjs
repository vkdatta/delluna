export const name="ent";
export const id="dl_c861d486ab494190867d";
export const url=new URL("../icons/ent.svg?v=08a47946caef06cae02267cd612af695a7173965e4246e8847d74e7fad7fc950",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
