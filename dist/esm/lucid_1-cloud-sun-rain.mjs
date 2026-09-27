export const name="lucid_1-cloud-sun-rain";
export const id="dl_a694de2178bd4fc6a495";
export const url=new URL("../icons/lucid_1-cloud-sun-rain.svg?v=71a67cadb24fb5b8382d2b6bb4c8d13e9b5a7155a7d7b32cdba215af66d59f51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
