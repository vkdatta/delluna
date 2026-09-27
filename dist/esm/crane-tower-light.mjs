export const name="crane-tower-light";
export const id="dl_3953ed8e528543978047";
export const url=new URL("../icons/crane-tower-light.svg?v=ec8e99386bf318895318085f2d77b464b00734d1d77987a7df1e6081ec7b769b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
