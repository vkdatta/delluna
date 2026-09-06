export const name="columns-fill";
export const id="dl_32d8161945d54656bbfc";
export const url=new URL("../icons/columns-fill.svg?v=ad118a0007021058813da73cd5d6c8ac6972f3243ec6d1170b21beac7c8b47a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
