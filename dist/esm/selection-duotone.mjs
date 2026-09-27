export const name="selection-duotone";
export const id="dl_009c2cb16b63275b437e";
export const url=new URL("../icons/selection-duotone.svg?v=0acb1847a7a5f76b0b311ff208477d15cf4c67c2a1d91679067a63172e69a9f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
