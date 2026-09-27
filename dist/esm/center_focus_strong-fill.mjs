export const name="center_focus_strong-fill";
export const id="dl_d21026e1368ca3f4851d";
export const url=new URL("../icons/center_focus_strong-fill.svg?v=980dae7a3b27d67f4883c851b2d033891faceb8e20b5afab234bcfd0a36b4039",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
