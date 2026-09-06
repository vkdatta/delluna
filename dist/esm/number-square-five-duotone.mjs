export const name="number-square-five-duotone";
export const id="dl_c78ae8b7916d4b7a8ae7";
export const url=new URL("../icons/number-square-five-duotone.svg?v=3669b249dc8a96df8a3a7cc15ae3e863acd5d87d95262e8af2141574c0828b17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
