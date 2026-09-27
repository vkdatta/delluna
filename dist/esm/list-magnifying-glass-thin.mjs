export const name="list-magnifying-glass-thin";
export const id="dl_ddecdb94b6de482496f3";
export const url=new URL("../icons/list-magnifying-glass-thin.svg?v=b56c7ec4889223a2447ce47fbbccc12b735b1323f620fe6a696b73d3c02b3a3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
