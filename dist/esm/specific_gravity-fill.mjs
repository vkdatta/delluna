export const name="specific_gravity-fill";
export const id="dl_d2de03e778ddadf64f32";
export const url=new URL("../icons/specific_gravity-fill.svg?v=74500f09847aada464ce26b4a0b8117fe35f3c3f07d4959bffa0698b981f1765",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
