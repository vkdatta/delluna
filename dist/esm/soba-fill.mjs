export const name="soba-fill";
export const id="dl_0a8f46c3ac9058595f10";
export const url=new URL("../icons/soba-fill.svg?v=8ec467ad3f922737584a93606131b88b189495e8e14acaa8f576cb52b4cb10e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
