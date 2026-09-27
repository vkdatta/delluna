export const name="tilde-light";
export const id="dl_52e38468296c69375c18";
export const url=new URL("../icons/tilde-light.svg?v=e9a713f27ac2ba35bf0a4fe28a349444b168f32adc4830baedba6237a7fa20fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
