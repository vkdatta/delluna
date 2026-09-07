export const name="map-pin-area-light";
export const id="dl_a565fc15aeaf4eda8280";
export const url=new URL("../icons/map-pin-area-light.svg?v=ac1225d75b88f831e08526069367789ec1d0bc9a7b9545672483f5f1b6a32d4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
