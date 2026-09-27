export const name="edit-fill";
export const id="dl_77b6383127c7e28835ea";
export const url=new URL("../icons/edit-fill.svg?v=c19145b23ea6e8e6b5834f5faea6bc572d62e17339ae8a06167fcace9642d94f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
