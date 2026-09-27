export const name="arrow-arc-left-light";
export const id="dl_5d9633013b7142508d15";
export const url=new URL("../icons/arrow-arc-left-light.svg?v=ad366ef27fe45767327ca8a682182c3347d6189fe7d6fa5ced20ca6207099c11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
