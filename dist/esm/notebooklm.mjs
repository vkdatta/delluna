export const name="notebooklm";
export const id="dl_b45e0142cd5e86b954f8";
export const url=new URL("../icons/notebooklm.svg?v=856bfd0ebf79e539808d6d7e06e19b3e3280e1f7b62f8084900cf8f286f3feca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
