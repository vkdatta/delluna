export const name="yard";
export const id="dl_76b3856bd0f6a43b5a93";
export const url=new URL("../icons/yard.svg?v=1af110a8f1cbfc2b724342cafbff3d7529e11a357f5b9c9c19e139de64938756",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
