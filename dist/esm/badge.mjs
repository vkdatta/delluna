export const name="badge";
export const id="dl_baccf891b2db28671820";
export const url=new URL("../icons/badge.svg?v=5e1230819605da76a7e148838950c1d219e0746feb408424d6f32c1b46d43d5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
