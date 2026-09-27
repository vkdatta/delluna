export const name="lucid_3-shopping-cart";
export const id="dl_56899e4c8e13428ab511";
export const url=new URL("../icons/lucid_3-shopping-cart.svg?v=3a790f78db4ec3e0e31a6ccdeec64e6fc605d6023abd605ca5cd365dbb90bcf7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
