export const name="arrow-square-left-light";
export const id="dl_0d31a59f402f4ea89136";
export const url=new URL("../icons/arrow-square-left-light.svg?v=4fa9e6a88b50ab0620df8f9e9b377c2155374af03188093e141b986d8ede4398",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
