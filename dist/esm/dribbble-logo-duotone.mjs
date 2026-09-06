export const name="dribbble-logo-duotone";
export const id="dl_67cb0bbf9ff3460c9901";
export const url=new URL("../icons/dribbble-logo-duotone.svg?v=06d769d8dce5662a35496a5ab005e7b4bf6fe751b1e1e72c5a8934d4e7621150",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
