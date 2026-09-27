export const name="personal_bag_question";
export const id="dl_4ac94407f93ddd7a7f9d";
export const url=new URL("../icons/personal_bag_question.svg?v=aa97ab5acd853e4751f9f3df3619f77ada3fbd54a58f99e7aaa260a1d9928255",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
