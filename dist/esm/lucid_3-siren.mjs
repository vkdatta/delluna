export const name="lucid_3-siren";
export const id="dl_995af2b50f3b42caad31";
export const url=new URL("../icons/lucid_3-siren.svg?v=498710611dce1ba985f8c4944ac5f6600b408e0f1476f57bec8f74ae296f7e9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
