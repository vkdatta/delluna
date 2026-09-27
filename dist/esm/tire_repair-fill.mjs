export const name="tire_repair-fill";
export const id="dl_6da68a25d2af640bc06a";
export const url=new URL("../icons/tire_repair-fill.svg?v=5874df8cd8339eba5635d4edff29b5395cc260c4e501ac83c7f1291bcaee7856",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
