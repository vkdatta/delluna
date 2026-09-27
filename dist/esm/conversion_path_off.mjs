export const name="conversion_path_off";
export const id="dl_29cc4692ae122f645136";
export const url=new URL("../icons/conversion_path_off.svg?v=047623f03fde1078874cf7d3cd768c8d43724d3410d22214b04fed2202c8bcaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
