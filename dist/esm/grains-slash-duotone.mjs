export const name="grains-slash-duotone";
export const id="dl_77e51f9ac2b7459f90a6";
export const url=new URL("../icons/grains-slash-duotone.svg?v=8bd0c4280fc748dd4f4f7d25215e66bdeb3362eabb80d3f07f80aa00ada7fe6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
