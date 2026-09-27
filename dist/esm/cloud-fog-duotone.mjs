export const name="cloud-fog-duotone";
export const id="dl_a42739cf8228451a87ad";
export const url=new URL("../icons/cloud-fog-duotone.svg?v=f4740f6bf43c2f680cfd33c76a796de4da69b9b50f87e4ea45df81e102f87b6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
