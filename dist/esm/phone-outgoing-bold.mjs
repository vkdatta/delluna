export const name="phone-outgoing-bold";
export const id="dl_db25f6b45700428eb37b";
export const url=new URL("../icons/phone-outgoing-bold.svg?v=21fa06cb1f199e3c5ca42bf04053de0cfed4a44483da33423f82393c6e81f05a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
