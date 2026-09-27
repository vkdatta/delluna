export const name="speedometer-duotone";
export const id="dl_0ce966c3c3883409e659";
export const url=new URL("../icons/speedometer-duotone.svg?v=12e69024eb6f04232833da4c7764401c0076bf94d56603a62d743238f5212373",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
