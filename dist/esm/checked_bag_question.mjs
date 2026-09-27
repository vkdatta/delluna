export const name="checked_bag_question";
export const id="dl_511dc7c99546f2b6ca37";
export const url=new URL("../icons/checked_bag_question.svg?v=f694fe8c5c67221e149350c64376169699e5b164177433c2e72b614075b8c64d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
