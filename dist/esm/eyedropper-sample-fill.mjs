export const name="eyedropper-sample-fill";
export const id="dl_c619eaa41c7a4b9cb41c";
export const url=new URL("../icons/eyedropper-sample-fill.svg?v=4f9f28d537c2da1ec241e77b156db4719fbafe6451b73c7bf1383bc70b2a6b7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
