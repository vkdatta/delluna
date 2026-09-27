export const name="medical_mask-fill";
export const id="dl_277a067f37cb4efdeb8f";
export const url=new URL("../icons/medical_mask-fill.svg?v=d6b7dbdcc7a4a7299120c27ad0de298dd594845f974acb365bf9a96cfd6c4819",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
