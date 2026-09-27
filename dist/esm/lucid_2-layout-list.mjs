export const name="lucid_2-layout-list";
export const id="dl_54af2e24e50344309029";
export const url=new URL("../icons/lucid_2-layout-list.svg?v=fa4adb1a3bbe4ff6ca1ebf41d16217fe61e54fe6a9176374fc1594281c302104",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
