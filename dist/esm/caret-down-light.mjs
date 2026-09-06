export const name="caret-down-light";
export const id="dl_4d3dbb1148364be29ee1";
export const url=new URL("../icons/caret-down-light.svg?v=f90a5ae97d000696a67c5a7787a78620bb3744648a63b0fe9cdbdc10476fecab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
