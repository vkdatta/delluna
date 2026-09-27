export const name="cloud_done-fill";
export const id="dl_ef7c7b06bc362f955b3a";
export const url=new URL("../icons/cloud_done-fill.svg?v=9875d6984e94c38061d1a316267b3e4a9fc176235f0944fc209bd0afd2e25012",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
