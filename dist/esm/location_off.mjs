export const name="location_off";
export const id="dl_da97a8d7e52e9b69ce9f";
export const url=new URL("../icons/location_off.svg?v=cabc5a7e13e3dbac8615836354e836e62957d51f8e814e924a604e456b8555db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
