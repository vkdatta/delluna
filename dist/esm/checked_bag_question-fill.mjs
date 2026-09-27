export const name="checked_bag_question-fill";
export const id="dl_4d6a3f393e4de8ad8c14";
export const url=new URL("../icons/checked_bag_question-fill.svg?v=362655a51400189f1397cf49adad1035291816ab82ca82a4a623dad014d3a6a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
