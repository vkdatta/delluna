export const name="splitscreen_right-fill";
export const id="dl_90f031838310448f4f26";
export const url=new URL("../icons/splitscreen_right-fill.svg?v=3a95243e8031a6aaba25835bb555ca7480731479cc6b21edb7a5cd4b5b1585e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
