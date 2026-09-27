export const name="ecg_heart-fill";
export const id="dl_856c428615e086c11176";
export const url=new URL("../icons/ecg_heart-fill.svg?v=f5a5c610cac866db0ef7aac2bac4186fa43bebe04870ef1c0f9c126332c3a64c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
