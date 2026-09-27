export const name="tools_flat_head";
export const id="dl_6ab7e516aa2e6044b461";
export const url=new URL("../icons/tools_flat_head.svg?v=8d8e0e8e8fa1ad66fca9fdc1ef6665c44a87c4276eb0d3f714ec6b22dc58aa44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
