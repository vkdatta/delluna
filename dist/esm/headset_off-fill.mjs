export const name="headset_off-fill";
export const id="dl_205899943666344af9a2";
export const url=new URL("../icons/headset_off-fill.svg?v=4f70d415eb00630ecd532dd70535a6909e3479437f46b6e1f755ee785e78d35b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
