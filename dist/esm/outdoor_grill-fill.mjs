export const name="outdoor_grill-fill";
export const id="dl_81323c9051f040a2bb68";
export const url=new URL("../icons/outdoor_grill-fill.svg?v=bc31a0960177eb011e3ddb2ba6ffc699de0e255558b4112a46f33511077cb4ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
