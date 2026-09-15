export const name="dine_lamp-fill";
export const id="dl_fc7a8daae4d14a02bfb9";
export const url=new URL("../icons/D/dine_lamp-fill.svg?v=cf5601321f14620e61be2a8bb1705b4702cd262b18f1978e7f967b009e7dd220",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
