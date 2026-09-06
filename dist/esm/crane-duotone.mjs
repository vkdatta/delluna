export const name="crane-duotone";
export const id="dl_8c0eb6b4bf03494e8be1";
export const url=new URL("../icons/crane-duotone.svg?v=ff65488554f6d202340ec07791f1bbbd08f57c6f7f194bf778b02f4b3eba7161",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
