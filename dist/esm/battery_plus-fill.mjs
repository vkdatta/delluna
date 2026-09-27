export const name="battery_plus-fill";
export const id="dl_b42ec4a4340d73bf889b";
export const url=new URL("../icons/battery_plus-fill.svg?v=6e09b8001dafdcb2673a97190ef0117289567382e8e36ab40c54bae8e6773d47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
