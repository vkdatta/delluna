export const name="squircle";
export const id="dl_ff515c6eb5714c5abbd9";
export const url=new URL("../icons/squircle.svg?v=e44f49c681ab924f7838c91cac75630094854f6d0083a0b14974190c653f7683",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
