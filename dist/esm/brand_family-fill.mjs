export const name="brand_family-fill";
export const id="dl_19d129cfa0659ba45241";
export const url=new URL("../icons/brand_family-fill.svg?v=0997259dec5179358886a9d847cee2d103b413feb4a98cec97668c87192e4f61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
