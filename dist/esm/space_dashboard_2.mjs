export const name="space_dashboard_2";
export const id="dl_f8c440c7b7f3a6febffe";
export const url=new URL("../icons/space_dashboard_2.svg?v=03a344891751d5b40cd2a5a001b81c67d042a299d0c3d993f50ccc893fa231d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
