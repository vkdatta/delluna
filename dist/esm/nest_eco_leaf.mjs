export const name="nest_eco_leaf";
export const id="dl_eeb856b13ed9939ee59d";
export const url=new URL("../icons/nest_eco_leaf.svg?v=ef1eedf308618db071c43655382515447495fbecc2a9a7ef2896500b4465b2ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
