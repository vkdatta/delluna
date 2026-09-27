export const name="psychology";
export const id="dl_ada6244e37c3742a190f";
export const url=new URL("../icons/psychology.svg?v=34ef0b81e11471797ac64771d19a1511000d4493f96a609cde9821b2278119fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
