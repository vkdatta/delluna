export const name="personal_bag_question-fill";
export const id="dl_af23b0d027e0fa15a899";
export const url=new URL("../icons/personal_bag_question-fill.svg?v=4f2616628cf3a14e0c1807080267eadb5ca9cbe98c2c97ea0a73a8fcf91cd663",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
