export const name="currency-cny-thin";
export const id="dl_675d35cb694740789516";
export const url=new URL("../icons/currency-cny-thin.svg?v=9d5ec4aa0d65a081c55eb761fe7fd3d788a6c535942d1074a5ac7b2095d59e77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
