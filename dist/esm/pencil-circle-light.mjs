export const name="pencil-circle-light";
export const id="dl_85bc4ce7d00a4bfe8948";
export const url=new URL("../icons/pencil-circle-light.svg?v=af25ba774f8fbec6bbce13890d035c5bf976cf2e57397bb470eb272c82250626",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
