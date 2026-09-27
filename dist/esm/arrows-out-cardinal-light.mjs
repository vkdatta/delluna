export const name="arrows-out-cardinal-light";
export const id="dl_24288cdd69954750bdf8";
export const url=new URL("../icons/arrows-out-cardinal-light.svg?v=fa7eaec60936f8f064263a77d267313179a713e76a79a931ed627db15a9bc53e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
