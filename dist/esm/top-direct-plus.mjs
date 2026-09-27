export const name="top-direct-plus";
export const id="dl_7cadf66e1dbe05153f82";
export const url=new URL("../icons/top-direct-plus.svg?v=f15bbdcc2e52d88b9e97bef8e2910b823b0f78d14f0f56a1db3d71ff01cd980b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
