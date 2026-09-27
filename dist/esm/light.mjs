export const name="light";
export const id="dl_e3a3f162b69b06d7287b";
export const url=new URL("../icons/light.svg?v=ac7200000049008755e7388459a95ccc7e9fba6f2bda5fa8172388f311ff3a29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
