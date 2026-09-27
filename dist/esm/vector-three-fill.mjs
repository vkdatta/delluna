export const name="vector-three-fill";
export const id="dl_23a1cdec79a907337dee";
export const url=new URL("../icons/vector-three-fill.svg?v=870aa8567c87b5bfc72649ed3ca795da5844ca23cccd9e44b2dab3df965df8b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
