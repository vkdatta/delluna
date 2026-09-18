export const name="metro-fill";
export const id="dl_04ecae47e8f64901b200";
export const url=new URL("../icons/metro-fill.svg?v=e9703790bcbbd4d7ec3d09e25bdf2eb20265f29c3e359e9ef4c678c63ef31287",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
