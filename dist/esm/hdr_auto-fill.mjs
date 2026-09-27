export const name="hdr_auto-fill";
export const id="dl_817d36c108bd86aa3e14";
export const url=new URL("../icons/hdr_auto-fill.svg?v=34887add89da812f9d9cdbe8a6624ec04df23f8ddc0339f86a9e337bba58d5b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
