export const name="tidal-logo-fill";
export const id="dl_6b949df507f4d23e6050";
export const url=new URL("../icons/tidal-logo-fill.svg?v=fac54db632f07b3f07bc031c9c75f254893fa8cd000922f133ade55acd2e214a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
