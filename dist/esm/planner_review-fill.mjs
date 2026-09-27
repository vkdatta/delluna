export const name="planner_review-fill";
export const id="dl_903e6271aaace5af908a";
export const url=new URL("../icons/planner_review-fill.svg?v=626c9b29fad9a239c79e2aaa7ed880bd44d51738cf71716245dc00d600d512b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
