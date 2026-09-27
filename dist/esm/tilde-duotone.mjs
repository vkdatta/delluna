export const name="tilde-duotone";
export const id="dl_7f63cf7109d92e0a89fb";
export const url=new URL("../icons/tilde-duotone.svg?v=46e50920ba97221e6138377eb4a49379d2840543f904725314bed53ec8491f0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
