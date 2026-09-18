export const name="add_alert-fill";
export const id="dl_86acd9a4c8ad44a4a65b";
export const url=new URL("../icons/add_alert-fill.svg?v=6e1d7ce97bc9ed2a85be44bfb23cc5ea4b090a9c9fed97f32bb79b0875d6e131",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
