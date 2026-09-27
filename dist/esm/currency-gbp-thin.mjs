export const name="currency-gbp-thin";
export const id="dl_cc739de6adb34919b2b0";
export const url=new URL("../icons/currency-gbp-thin.svg?v=c35455d179eddb2537275a1d65d47f12e3cd68760fed2fee5f246a4fe6165e12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
