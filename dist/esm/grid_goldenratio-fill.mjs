export const name="grid_goldenratio-fill";
export const id="dl_84b816a8ca6044a4ab0d";
export const url=new URL("../icons/grid_goldenratio-fill.svg?v=6bf1c5b34c9a7037ca3a11b6a78d600099236792e1299b6cd998f26f6224d489",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
