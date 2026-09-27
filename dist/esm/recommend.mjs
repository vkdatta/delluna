export const name="recommend";
export const id="dl_58a4db1172e52c89e465";
export const url=new URL("../icons/recommend.svg?v=f51c36d7b80a6215beba406de5c8b716e0d05d37f9815cc84a05c2279bcf1f22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
