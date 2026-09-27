export const name="update-fill";
export const id="dl_8976d3498f41b5c3a0f4";
export const url=new URL("../icons/update-fill.svg?v=cca415c682ea28df8bd058aae846d89cc23978bd810170f2a4e87579290a5f35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
