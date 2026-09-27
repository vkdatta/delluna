export const name="pencil-line-light";
export const id="dl_67f44b9891ee4e4998f7";
export const url=new URL("../icons/pencil-line-light.svg?v=f9af655ab6f5bda96e88c13b9ae945c52205cf7cc474896fada2b1225e3a9c2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
