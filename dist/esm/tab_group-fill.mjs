export const name="tab_group-fill";
export const id="dl_ef4c7472fd71b5224fe2";
export const url=new URL("../icons/tab_group-fill.svg?v=f5e8cc39df6f7dd3f31213e87485b46961c4b17aa976136a827cee74d9f579db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
