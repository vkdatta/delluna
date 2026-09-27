export const name="order_play";
export const id="dl_dc6e9a055661a3623804";
export const url=new URL("../icons/order_play.svg?v=9f3da2cbb94d1899da0a0944bf6aad24452ed2656f864079aa170ff61b507146",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
