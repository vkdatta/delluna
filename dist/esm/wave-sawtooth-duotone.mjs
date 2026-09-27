export const name="wave-sawtooth-duotone";
export const id="dl_97709c1495e488fbdc8f";
export const url=new URL("../icons/wave-sawtooth-duotone.svg?v=7eaaf6fafef8c34e5f7aa05db2049c281d7d6370b1d40c72b9da73f8144af6d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
