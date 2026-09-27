export const name="scroll-light";
export const id="dl_ee4fd8aca798b1f3d753";
export const url=new URL("../icons/scroll-light.svg?v=7f7d4b018a3850dbe6d126711048fa689a8e555b1153b0aa4dcf32be3c72fafc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
