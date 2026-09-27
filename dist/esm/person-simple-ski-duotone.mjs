export const name="person-simple-ski-duotone";
export const id="dl_67b7f0c6cdf34e85a538";
export const url=new URL("../icons/person-simple-ski-duotone.svg?v=ab0bdf2e0245a5b48d27560b96a1e45dee3e0dd7d229d1577517708354b57e58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
