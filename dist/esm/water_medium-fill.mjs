export const name="water_medium-fill";
export const id="dl_2462809bcc18d6ca6c62";
export const url=new URL("../icons/water_medium-fill.svg?v=8a39a170a6bf6f1c96b2754359d98e78b607ae553b6e428a05f1eb44980c02ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
