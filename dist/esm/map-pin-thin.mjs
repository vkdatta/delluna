export const name="map-pin-thin";
export const id="dl_32bb05b55af242ecb70d";
export const url=new URL("../icons/map-pin-thin.svg?v=fdbfb8e8d7bd6d89e3d133ca8d79c61f9ec748e1d851710933f4a3d9d7e075d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
