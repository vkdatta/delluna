export const name="battery-vertical-low";
export const id="dl_2d2c5eb617df4c6292a9";
export const url=new URL("../icons/battery-vertical-low.svg?v=2c8ad3e83345e3b813a4dc98429b6187486cb0473d04e32f2cec709ba379c820",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
