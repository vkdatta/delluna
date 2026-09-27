export const name="plugs-connected-light";
export const id="dl_fa25891cbdf54956bef4";
export const url=new URL("../icons/plugs-connected-light.svg?v=10c528bf038ae52ac5e631cc81fffb54df429c8678e7882bcec1e5485482ecd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
