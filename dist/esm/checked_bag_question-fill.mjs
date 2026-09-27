export const name="checked_bag_question-fill";
export const id="dl_dfc3bbff580c25009c28";
export const url=new URL("../icons/checked_bag_question-fill.svg?v=246722f4f2ee9345181fbf828f7715c99286cebc4df8f5919079079e2fb54c57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
