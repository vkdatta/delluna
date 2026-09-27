export const name="personal_bag_question";
export const id="dl_33123c0041d167549356";
export const url=new URL("../icons/personal_bag_question.svg?v=c369b157059a5633e0023947435dcfbf921f10b507b807989ef3f339d39d5d90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
