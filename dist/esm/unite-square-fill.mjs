export const name="unite-square-fill";
export const id="dl_b6522142b5fd5d3d97fb";
export const url=new URL("../icons/unite-square-fill.svg?v=472e214e40f3bc0eff34a3202f4cbb10264b9d1553cea23c08f2e0aac53d534c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
