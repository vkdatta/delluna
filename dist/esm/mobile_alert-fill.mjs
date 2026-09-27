export const name="mobile_alert-fill";
export const id="dl_09e91c5f6a4cc7f26432";
export const url=new URL("../icons/mobile_alert-fill.svg?v=7ba83150ab5c9c4c5f32b2b695ffd08d70c50b04dab318d942e38b86d784d723",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
