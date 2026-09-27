export const name="map-pin-line-duotone";
export const id="dl_719763a126e948e1a36d";
export const url=new URL("../icons/map-pin-line-duotone.svg?v=948bb722e7c6234a29e99bdc19705e4a548ebc6de8227361a1316549b8672b2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
