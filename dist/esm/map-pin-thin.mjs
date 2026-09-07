export const name="map-pin-thin";
export const id="dl_32bb05b55af242ecb70d";
export const url=new URL("../icons/map-pin-thin.svg?v=bcd244ef7efbc6b9efccde3762f52ce5b20bca0ce73c691c1997a668810f1dc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
