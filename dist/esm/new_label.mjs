export const name="new_label";
export const id="dl_62b4369947593aa63b10";
export const url=new URL("../icons/new_label.svg?v=94af8de0f9c5ae5ccbb640ff8ef2b330f93bdcf006f9d26ce6e301f85787c02c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
