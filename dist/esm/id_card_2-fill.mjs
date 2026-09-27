export const name="id_card_2-fill";
export const id="dl_c40f97154272889932ca";
export const url=new URL("../icons/id_card_2-fill.svg?v=bb949436af276bbbfc285e0f48db029c42717a2459530ef1c11fe359039f4279",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
