export const name="monitor-bold";
export const id="dl_1fa638da174547d7bbce";
export const url=new URL("../icons/monitor-bold.svg?v=130e06f09c3ca1e1da08a2913df694a8d55ae035fda7a5cf63125d8bc97d5754",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
