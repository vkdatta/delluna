export const name="punch_clock-fill";
export const id="dl_893c112c53c94b419c73";
export const url=new URL("../icons/punch_clock-fill.svg?v=66b544bd7ca6bcc675c9aba6e35cd1d2eda5191f020d83c98f67b7ac410bd779",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
