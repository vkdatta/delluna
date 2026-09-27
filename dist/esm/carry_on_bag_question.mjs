export const name="carry_on_bag_question";
export const id="dl_127d75dedf103ab89181";
export const url=new URL("../icons/carry_on_bag_question.svg?v=3ac8b245e48fb1065f5c520e16f034f1c74c28ffbb465e563fe1f9bd9b3e85fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
