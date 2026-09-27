export const name="network_intelligence_update-fill";
export const id="dl_1e30f57bc57d280a18ae";
export const url=new URL("../icons/network_intelligence_update-fill.svg?v=bb9a59f2ea96f60bc01100351455783c02e00dd75f55770e6c63cf7fc233f297",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
