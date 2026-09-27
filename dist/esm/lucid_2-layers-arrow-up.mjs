export const name="lucid_2-layers-arrow-up";
export const id="dl_eabb09c6e42240c2a4bb";
export const url=new URL("../icons/lucid_2-layers-arrow-up.svg?v=81fbdd9320dfa8b0ccb30c3bea9e0e2069615edcf5094f521826d4f76f4db579",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
