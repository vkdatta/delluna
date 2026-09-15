export const name="festival-fill";
export const id="dl_405ed5c41f254da18f4f";
export const url=new URL("../icons/F/festival-fill.svg?v=1628d1470458d39d20ef6cb4bae07488a13fe513bfcdd913948173f8526ccd36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
