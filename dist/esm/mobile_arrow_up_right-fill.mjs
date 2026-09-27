export const name="mobile_arrow_up_right-fill";
export const id="dl_6dab9e98ffa21225b597";
export const url=new URL("../icons/mobile_arrow_up_right-fill.svg?v=ab9a08bd3847ec47e266d42ccb608ff386221e7a4dc1f93bf2715f32a5f3e4ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
