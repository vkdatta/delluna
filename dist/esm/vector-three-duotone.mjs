export const name="vector-three-duotone";
export const id="dl_dcefe12b200f4e159f1d";
export const url=new URL("../icons/V/vector-three-duotone.svg?v=39361bd2a7f94a64b5ea72f88667a5ca2796fe8379880431d5127fd83c7473c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
