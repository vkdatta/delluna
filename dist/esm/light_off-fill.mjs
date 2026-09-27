export const name="light_off-fill";
export const id="dl_5b2bed74369515ea1741";
export const url=new URL("../icons/light_off-fill.svg?v=74e5adb47696e6a55f0ea5af7280bd18d2798e1243ce483b2e9625c56f32db46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
