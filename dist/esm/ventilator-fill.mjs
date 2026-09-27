export const name="ventilator-fill";
export const id="dl_67e283e744ec3a6a2695";
export const url=new URL("../icons/ventilator-fill.svg?v=1ddfc3eb7f8bc813a855fcbcfe0df704522aa7681cd34e7ad2ba1e7845c0b31b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
