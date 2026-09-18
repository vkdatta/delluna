export const name="person_edit";
export const id="dl_21833a2a3e584bbc9dbf";
export const url=new URL("../icons/person_edit.svg?v=dafb376a4cb9b79789a5ad0ffd454dd0d25d14d379d52e3ff5f5faea0b21d2b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
