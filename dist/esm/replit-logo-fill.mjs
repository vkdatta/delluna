export const name="replit-logo-fill";
export const id="dl_ac1fb9476e6b4088984d";
export const url=new URL("../icons/replit-logo-fill.svg?v=bd9671a2bf01585a425908e403a414697d8632a78ee17e0b6f20edd0e141f638",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
