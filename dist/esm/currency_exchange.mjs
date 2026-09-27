export const name="currency_exchange";
export const id="dl_01ce17ad5856b88cb9cf";
export const url=new URL("../icons/currency_exchange.svg?v=3df18d6111528562a70d38be5107c99af7f32edfb3268e3160425f58b7b7ca41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
