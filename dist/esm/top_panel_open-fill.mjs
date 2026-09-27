export const name="top_panel_open-fill";
export const id="dl_06f62c13da246734db4d";
export const url=new URL("../icons/top_panel_open-fill.svg?v=f09ce79dcb8b26c948ba99bc3f650a545fa5287d80cd450cadf5ce8c3dde28bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
