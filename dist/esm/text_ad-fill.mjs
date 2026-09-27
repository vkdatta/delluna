export const name="text_ad-fill";
export const id="dl_4e3f67546465ad15fa76";
export const url=new URL("../icons/text_ad-fill.svg?v=6afd5406f10bde4e372d1d48d02e0f6193c20af18f64a52e0091dba02ff3c21c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
