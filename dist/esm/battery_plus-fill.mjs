export const name="battery_plus-fill";
export const id="dl_2a8c70cdc37ee8f9cce8";
export const url=new URL("../icons/battery_plus-fill.svg?v=d0df6a8d771223549b74b8508b3dbc81863be844dbd3f6f8b01a1c5ffcb5a6c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
