export const name="next_plan-fill";
export const id="dl_5b210b1d18dd51200029";
export const url=new URL("../icons/next_plan-fill.svg?v=a618fe26596d787cd6c96dcba61a18a694409e5062079ae2497ccf0c0f1685a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
