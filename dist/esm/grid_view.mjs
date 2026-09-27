export const name="grid_view";
export const id="dl_2eb4ff427f7b993bd10a";
export const url=new URL("../icons/grid_view.svg?v=54f4f848259d8bb818682c6b1bc695c7d807fc621ee9f4fc995ef24df946d693",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
