export const name="bed-duotone";
export const id="dl_26d0b4f6ebc04a868725";
export const url=new URL("../icons/bed-duotone.svg?v=eae20fa01ef5de4f014fbe56fbfbdcd47a627b0cc299d3f5b34393fcd363009a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
