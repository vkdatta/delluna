export const name="assignment_late";
export const id="dl_46ab1ab537278243cedc";
export const url=new URL("../icons/assignment_late.svg?v=581bcc13e0f6028a2573967c788940f8b61dba61975aefbaa2a7a7b12cf018ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
