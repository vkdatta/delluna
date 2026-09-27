export const name="lucid_3-package-minus";
export const id="dl_6079f666a10442a2809d";
export const url=new URL("../icons/lucid_3-package-minus.svg?v=110f480a4002dacf731e15044f7e98df4a5e646a1105427122a4b84ed0e5acaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
