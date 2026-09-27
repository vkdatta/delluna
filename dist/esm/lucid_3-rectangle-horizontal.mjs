export const name="lucid_3-rectangle-horizontal";
export const id="dl_b2022b863a154dc7bbe8";
export const url=new URL("../icons/lucid_3-rectangle-horizontal.svg?v=5917e77b3f8b6a9b4773fc6738113f077cb36fb27342aef29b77be1eda9866ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
