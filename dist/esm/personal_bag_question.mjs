export const name="personal_bag_question";
export const id="dl_6453d483d0ce5606c862";
export const url=new URL("../icons/personal_bag_question.svg?v=4f5af75df4397e3a5b49d440b2c71429d5e7475e013ce6019427d39de75846ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
