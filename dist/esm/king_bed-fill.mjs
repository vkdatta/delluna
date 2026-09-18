export const name="king_bed-fill";
export const id="dl_7edfa5417ecc4d149bf3";
export const url=new URL("../icons/K/king_bed-fill.svg?v=d084d59b55aef34c51416ab4597155c4102c429b00c94b4b9ed92f908b687133",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
