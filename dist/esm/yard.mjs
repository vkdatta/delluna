export const name="yard";
export const id="dl_9e7b0b871f554c129f1e";
export const url=new URL("../icons/yard.svg?v=512c11dd45113b2034d0f927e69ae3677ab5236e7c56b9d3cde0a2eb3d9ddc5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
