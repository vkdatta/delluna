export const name="wine";
export const id="dl_268ca4510ef84d8a8619";
export const url=new URL("../icons/wine.svg?v=4ba040c27e92748555e78ee56623d12e78f516db1face7903b3d900327ae1cdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
