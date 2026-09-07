export const name="lucid_2-disc-3";
export const id="dl_0829e8c5c7f6419d888d";
export const url=new URL("../icons/lucid_2-disc-3.svg?v=0fffde33876c0bcc5e3b685bf144b8257d2ec9396c6b4a1688037607dab51033",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
