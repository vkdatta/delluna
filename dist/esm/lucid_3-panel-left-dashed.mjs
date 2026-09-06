export const name="lucid_3-panel-left-dashed";
export const id="dl_79e64147dab54fa1a2e8";
export const url=new URL("../icons/lucid_3-panel-left-dashed.svg?v=a3f8a5f4ce8ed764d5a860bfa2e4a2ea16a5eaea59a869d3d7ff84430af51009",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
