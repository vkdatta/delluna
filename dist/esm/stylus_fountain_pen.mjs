export const name="stylus_fountain_pen";
export const id="dl_26add20c15c99278b244";
export const url=new URL("../icons/stylus_fountain_pen.svg?v=365dd570e6015b632f00609d606b1e492f716006e1587cfab3441c7c664d6185",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
