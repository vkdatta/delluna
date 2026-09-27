export const name="mimo-fill";
export const id="dl_ad0649d6b014d7a55d4b";
export const url=new URL("../icons/mimo-fill.svg?v=8ef2e10db08d9a5ad1e3da97ee18d8c2ac229ea53869425c706c743419d3181c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
