export const name="photo-fill";
export const id="dl_5ff4e59fbfe3f09ebb5c";
export const url=new URL("../icons/photo-fill.svg?v=804619f69e37f035caa5e85bb88df718ba8a020c1ecbd46342eb8edce5ebaa17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
