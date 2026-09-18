export const name="new_label";
export const id="dl_11b51a6d50ed481d8a3e";
export const url=new URL("../icons/new_label.svg?v=94af8de0f9c5ae5ccbb640ff8ef2b330f93bdcf006f9d26ce6e301f85787c02c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
