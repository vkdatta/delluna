export const name="battery_android_0-fill";
export const id="dl_083bfa81cc2a01eef1f4";
export const url=new URL("../icons/battery_android_0-fill.svg?v=d7c86d1d4419d627dafddcc1dada482628354d041f45f9511f7ac5ab5adcab4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
