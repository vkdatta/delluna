export const name="lucid_3-shopping-cart-plus";
export const id="dl_ff52fa506115421a91d7";
export const url=new URL("../icons/lucid_3-shopping-cart-plus.svg?v=cf79a73e57867b5a57c2a883f23f090879c03435936f164a88243594c48e8ed3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
