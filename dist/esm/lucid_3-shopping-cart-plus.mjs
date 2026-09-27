export const name="lucid_3-shopping-cart-plus";
export const id="dl_ff52fa506115421a91d7";
export const url=new URL("../icons/lucid_3-shopping-cart-plus.svg?v=501acd1a43a955b5adcfe0fec630e5a2445dddc1753c783a4244d112e1c95730",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
