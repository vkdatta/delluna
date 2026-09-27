export const name="arrow_selector_tool";
export const id="dl_eeb38c32c21886c3ae4c";
export const url=new URL("../icons/arrow_selector_tool.svg?v=d9df4a66a349bce776d4323da9a1592792380f79b7bb9e1c7a9e35558422bee7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
