export const name="next_plan";
export const id="dl_ce4115394aacc1e0badd";
export const url=new URL("../icons/next_plan.svg?v=32aeb14e5cc89a5f7136fd3b12f06d24261c8a9ce56b07baca9fb911618ba56f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
