export const name="groups_2";
export const id="dl_4ddb98058f7f69891910";
export const url=new URL("../icons/groups_2.svg?v=454c9c9e0a62b35c5adc4ea2726af541ff4bede4f745ee2703ec53302c24bd8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
