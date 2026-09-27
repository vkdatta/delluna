export const name="commute";
export const id="dl_69f478c491717c273121";
export const url=new URL("../icons/commute.svg?v=1631cd035f03e134523985a9ba27b0e515961505426fdcde7de3d202e0dd1a09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
