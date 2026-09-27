export const name="planner_review-fill";
export const id="dl_29c4f18c3d36ef7318b7";
export const url=new URL("../icons/planner_review-fill.svg?v=ad1597311d984d481ca3333c5448d245c7e8c79d7901c1da22366408ea092eb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
