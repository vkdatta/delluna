export const name="car-thin";
export const id="dl_cfe9ad8181294ad8bb3f";
export const url=new URL("../icons/car-thin.svg?v=30214851cb9307790baa82803731ddc22f8898d966bb549776a83096d28380c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
