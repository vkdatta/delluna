export const name="file-vue-light";
export const id="dl_badbffbada724623a5db";
export const url=new URL("../icons/file-vue-light.svg?v=cc877a1523c9bbeb5ab0e6323f645116c5a7cb98389d80119f64b09b3a6a8211",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
