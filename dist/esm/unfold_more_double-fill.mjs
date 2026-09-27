export const name="unfold_more_double-fill";
export const id="dl_efc00eb4c3d7c188b57d";
export const url=new URL("../icons/unfold_more_double-fill.svg?v=088e8fbbdaf34d70e3bdd55efc481f4f72e504877c0887321c4f6d9a4323a1a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
