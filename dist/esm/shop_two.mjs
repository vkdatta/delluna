export const name="shop_two";
export const id="dl_fc48236afffc46628079";
export const url=new URL("../icons/shop_two.svg?v=4337f68f41a81da803f3bf0829fd3cd894ae4abdd343493d14b1f8e568559094",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
