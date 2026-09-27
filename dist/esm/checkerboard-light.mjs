export const name="checkerboard-light";
export const id="dl_aed73dd364244a74b441";
export const url=new URL("../icons/checkerboard-light.svg?v=5937d67309697a55c4c70098f5f5424fc3c4e09ab072e4743d7687c54fb78e7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
