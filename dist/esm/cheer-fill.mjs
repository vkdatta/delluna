export const name="cheer-fill";
export const id="dl_d5eaa6423094ff0d711b";
export const url=new URL("../icons/cheer-fill.svg?v=ec6649251de6f96dd80891c8512f3a43ab6d3193dc418daed3653df22b7b9912",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
