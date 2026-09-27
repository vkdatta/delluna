export const name="flip_to_front-fill";
export const id="dl_26771e6c49aaeb11d2b4";
export const url=new URL("../icons/flip_to_front-fill.svg?v=9c63415e12f4b377240779af89f8d6e7ad5755589c0578d4e93592340c67e48c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
