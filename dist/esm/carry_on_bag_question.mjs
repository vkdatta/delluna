export const name="carry_on_bag_question";
export const id="dl_9cb9f0aa11455748f7f1";
export const url=new URL("../icons/carry_on_bag_question.svg?v=9ffe95d1551a473502a5c94f93d534cc2c1c6ec3bbb317d854a082a3cf4fd75b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
