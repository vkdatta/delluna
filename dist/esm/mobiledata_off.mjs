export const name="mobiledata_off";
export const id="dl_411ce6072abfcb9412e3";
export const url=new URL("../icons/mobiledata_off.svg?v=7505ccbc13e0d782d11c39244c24412ef9d17872166653fb0616712bf5d032a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
