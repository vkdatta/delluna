export const name="game_stick_r3-fill";
export const id="dl_b012a41eb65a88609941";
export const url=new URL("../icons/game_stick_r3-fill.svg?v=0ba40b2766a57ccdfb28d772f3124f898faffa8a5c0433d217762a64611bfed2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
