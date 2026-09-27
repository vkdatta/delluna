export const name="police-car-light";
export const id="dl_36fd8f69c11f40769c8f";
export const url=new URL("../icons/police-car-light.svg?v=960c90bc44e3f982043f134ade2cdfcc6d43571292f9cee588e63b54385971ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
