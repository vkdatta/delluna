export const name="tab_new_right-fill";
export const id="dl_8b5e528a54ea196f1f63";
export const url=new URL("../icons/tab_new_right-fill.svg?v=d9556701d8eda013a6a21ebde90def63d96cf43a445acd8e01e1eba44f98a065",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
