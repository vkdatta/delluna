export const name="folder-simple-minus-light";
export const id="dl_e5d03018a7d746d3b659";
export const url=new URL("../icons/folder-simple-minus-light.svg?v=c18aed4a70b2c801d0945cd3a892b2119afa338e457d1d5d4b36e5bf5119d7df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
