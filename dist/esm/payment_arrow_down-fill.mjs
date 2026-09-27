export const name="payment_arrow_down-fill";
export const id="dl_79b375532ea3b977f88a";
export const url=new URL("../icons/payment_arrow_down-fill.svg?v=2bceb9b52b6fe81dc5feda72cd4eab2ff3228eb0cc6261dffb026204e33d4354",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
