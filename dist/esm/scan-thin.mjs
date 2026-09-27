export const name="scan-thin";
export const id="dl_d26966b7be16347a4d0d";
export const url=new URL("../icons/scan-thin.svg?v=f2e9ff0e518a40ae46789678cf5467c04dff9338363a7914ba382a4e4614bbb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
