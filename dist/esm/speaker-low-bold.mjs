export const name="speaker-low-bold";
export const id="dl_0921fb12b659480f8f4e";
export const url=new URL("../icons/S/speaker-low-bold.svg?v=b60ada29bb53895a3055a266175316f6a102f99a10730afc61bff9acd5bff5eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
