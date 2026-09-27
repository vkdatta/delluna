export const name="warehouse-light";
export const id="dl_694dbb3b77ee04a4e4cf";
export const url=new URL("../icons/warehouse-light.svg?v=2018a14cd6882727c269be241cafed345431a195b14f6be3f8df33f56feefcd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
