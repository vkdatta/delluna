export const name="monitor-bold";
export const id="dl_1fa638da174547d7bbce";
export const url=new URL("../icons/monitor-bold.svg?v=818d5c4cc4f2f43216195b8e01c1e80197e9b359814478a9588e286b3bd9b948",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
