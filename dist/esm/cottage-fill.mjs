export const name="cottage-fill";
export const id="dl_96eb3433d1a11ba39c38";
export const url=new URL("../icons/cottage-fill.svg?v=3ca9c4e3917adc0fdd669be34cb4d32872e131182a5e662839a04aff248e0b4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
