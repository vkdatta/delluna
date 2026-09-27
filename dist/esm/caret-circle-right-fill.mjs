export const name="caret-circle-right-fill";
export const id="dl_69c08ee556584433aa7f";
export const url=new URL("../icons/caret-circle-right-fill.svg?v=76696047dbb0a797212cf824461c98697c1151de7cb6dc4c39933fcecad742eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
