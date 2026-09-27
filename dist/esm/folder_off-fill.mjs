export const name="folder_off-fill";
export const id="dl_af3fbb72f0b5c09baea7";
export const url=new URL("../icons/folder_off-fill.svg?v=aface5d8e053985956b55910686db0f0fa758b53cf48ca146d7119a7ae3420b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
