export const name="nest_farsight_dual";
export const id="dl_a1fae442ecfd08fef97b";
export const url=new URL("../icons/nest_farsight_dual.svg?v=0f97bd1ef0c63bce35cd201f045a78cd111341cbd4fe62793f1a95d9fb7505fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
