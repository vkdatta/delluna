export const name="garden_cart";
export const id="dl_9b21ac740b4d780adc87";
export const url=new URL("../icons/garden_cart.svg?v=1f1970f484974052cbd11264675705a9f1dd3b41a1dde6e22943c52aa667a7d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
