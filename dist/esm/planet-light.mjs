export const name="planet-light";
export const id="dl_6cf89efc13824d248ab4";
export const url=new URL("../icons/planet-light.svg?v=8513bd579fd243d9755f3e230bf0e902b91bf17704c0f2c45fe0528c93f8a7d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
