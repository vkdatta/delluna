export const name="tractor-light";
export const id="dl_5129ee4599f142a89050";
export const url=new URL("../icons/T/tractor-light.svg?v=1b7d211453b61c89a025cb65b3d7501c7bde8d51dd5b7ae630225b51555ab8c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
