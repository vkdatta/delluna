export const name="equal";
export const id="dl_5869e18577907384069e";
export const url=new URL("../icons/equal.svg?v=47527944b9283c4d575c569e5c03ae0fd86ebc9a8ff442a76de067f7adc3018f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
