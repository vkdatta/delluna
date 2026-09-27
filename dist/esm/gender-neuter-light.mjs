export const name="gender-neuter-light";
export const id="dl_fee129190adf41b49527";
export const url=new URL("../icons/gender-neuter-light.svg?v=5fdba983cf3240e6800eef288bce4622460b444a3d12591f9b0d98141202b35b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
