export const name="person_edit";
export const id="dl_d6f7da6623e88182475c";
export const url=new URL("../icons/person_edit.svg?v=2ebd9c77840358b1cbab4d5b0898eabb295a5d64600ac55e6fe274429d04848d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
