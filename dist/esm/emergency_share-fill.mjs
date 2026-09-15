export const name="emergency_share-fill";
export const id="dl_7f63d7addccc45879d96";
export const url=new URL("../icons/E/emergency_share-fill.svg?v=c2d174ad227a3760c53d3a7a3e2d1fdf04171f9d8bf6fd668e230fcc09dcd1a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
