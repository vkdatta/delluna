export const name="toggle-left-fill";
export const id="dl_a8dfa0fcec44bd62854b";
export const url=new URL("../icons/toggle-left-fill.svg?v=4188c30a62dd75ec1f8cd0c89dae35cf3202f2520aec99166f0afecc562ecbac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
