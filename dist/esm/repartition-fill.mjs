export const name="repartition-fill";
export const id="dl_f6125d86c7aca2440a1a";
export const url=new URL("../icons/repartition-fill.svg?v=0d80e1298c5d97fc1407b05fd3a5568b8819d296257eb6421234843f1a0ef86a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
