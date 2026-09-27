export const name="japanese_flag";
export const id="dl_fcc17d19fab6ac014741";
export const url=new URL("../icons/japanese_flag.svg?v=9d90575e662e0d1e5c11aa1bf28188896473daf13ef47fe79fdb71385ffe98fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
