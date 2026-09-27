export const name="credit_card_clock-fill";
export const id="dl_76d14bb312fa95e7a9ef";
export const url=new URL("../icons/credit_card_clock-fill.svg?v=321a4c5da8ab433c7a07675b03752ae6c1eb461ef7e5ce6c8521e6717b742fa8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
