export const name="touch_double-fill";
export const id="dl_bfc44f7b1a85f778807d";
export const url=new URL("../icons/touch_double-fill.svg?v=730075f10225195a0b04fd87fa6f1fb1028418b38b4149d830b1fa378961e8d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
