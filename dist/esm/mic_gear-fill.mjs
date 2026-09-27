export const name="mic_gear-fill";
export const id="dl_5c102c359083d2a11d2f";
export const url=new URL("../icons/mic_gear-fill.svg?v=018cd6ffb14f730a412842937f7e05d70bd99a90beec1c1369b36db1d9000e10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
