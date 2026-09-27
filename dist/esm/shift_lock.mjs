export const name="shift_lock";
export const id="dl_cba1626f42c5f9f86c0b";
export const url=new URL("../icons/shift_lock.svg?v=a2443f9c9f08d929c2c093568f226cb61746e29f824012760ced3f012b950ca2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
