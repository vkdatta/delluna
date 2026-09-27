export const name="push-pin-fill";
export const id="dl_7d6efe3936474116b231";
export const url=new URL("../icons/push-pin-fill.svg?v=2cecaecfe2b4c4a33ccd86d91692cb0725a10f4cc9024fa33cbdd7467ae8510e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
