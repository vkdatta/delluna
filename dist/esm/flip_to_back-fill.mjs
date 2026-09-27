export const name="flip_to_back-fill";
export const id="dl_af574ca3e67e61a54773";
export const url=new URL("../icons/flip_to_back-fill.svg?v=369c4d6c4fbbe8037ef6d33b7fa1e46d6b75bdd2329c1961ae218a752113edf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
