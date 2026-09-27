export const name="mobile_theft-fill";
export const id="dl_81b4a7737467c0179618";
export const url=new URL("../icons/mobile_theft-fill.svg?v=e2b63800ecc2ba3d716babd37395a1418d4010739dfb46ecb85de966a86117b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
