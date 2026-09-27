export const name="currency-btc-light";
export const id="dl_ab032de94de0480090c3";
export const url=new URL("../icons/currency-btc-light.svg?v=f72873afe458bf581a73f5e2c845854d9da0a9393712db46d634aa6f85bb77bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
