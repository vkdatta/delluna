export const name="planner_review-fill";
export const id="dl_5b68b98bd0bc97c8089b";
export const url=new URL("../icons/planner_review-fill.svg?v=b4318ecdb3772e440005ea8d555c11708259f92bd7d49aaf8241b2a7a4b7b312",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
