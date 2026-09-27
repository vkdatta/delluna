export const name="plugs-duotone";
export const id="dl_0b747fa43c45462196c1";
export const url=new URL("../icons/plugs-duotone.svg?v=b55db2d53744458f4e3bf5b459fbecb16be8727dfba18b94d7ac050b5b81d50b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
