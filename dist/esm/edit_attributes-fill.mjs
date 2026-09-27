export const name="edit_attributes-fill";
export const id="dl_f2a50f103aec9eca7a9b";
export const url=new URL("../icons/edit_attributes-fill.svg?v=69bcea2ac6966d0d60d8b20ba8da79ecdf420ccc264f1250654637c55bc508be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
