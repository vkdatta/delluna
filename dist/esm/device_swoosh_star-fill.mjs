export const name="device_swoosh_star-fill";
export const id="dl_0465740823e84587b3fb";
export const url=new URL("../icons/device_swoosh_star-fill.svg?v=64d32641c15846d2b0134de1dd40362d15ac9bf23adb9cd78ccaeb7070af896f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
