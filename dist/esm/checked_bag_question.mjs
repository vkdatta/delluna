export const name="checked_bag_question";
export const id="dl_286020eb2acde395b2ab";
export const url=new URL("../icons/checked_bag_question.svg?v=d8151da7400257f12407f231c07aa4a5ead49539064d157d3b40afe5ac0b6695",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
