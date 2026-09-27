export const name="lucid_2-credit-card-plus";
export const id="dl_5422a69129ff47f0a937";
export const url=new URL("../icons/lucid_2-credit-card-plus.svg?v=a0b1ca255b6d619729690995059ea45e505878d5d8fbc587e992c6695d4b632f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
