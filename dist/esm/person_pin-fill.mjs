export const name="person_pin-fill";
export const id="dl_b5dd37638d935de3f4e8";
export const url=new URL("../icons/person_pin-fill.svg?v=0f85bb04e7560cba9136bcf86f546b353b36fd753719914d62b3565f3cabe153",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
