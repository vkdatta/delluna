export const name="planner_review-fill";
export const id="dl_1f27186522a96cb54f58";
export const url=new URL("../icons/planner_review-fill.svg?v=83e20762261994eedf0dd9c590bed37366779bf86aca9518369318c6ff7d8f6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
