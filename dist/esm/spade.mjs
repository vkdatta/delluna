export const name="spade";
export const id="dl_3ced5cb3471cd6f683a2";
export const url=new URL("../icons/spade.svg?v=9051466c841618d8c61cf04fd97320e51d2710c30f22be29baadba69e2adfe2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
