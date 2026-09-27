export const name="map-pin-simple-duotone";
export const id="dl_d4f344e2718c439da080";
export const url=new URL("../icons/map-pin-simple-duotone.svg?v=7a84d138d8bc53648a70189b5f6b186e49f2704ea6a3a861315c8e7a4f8c47a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
