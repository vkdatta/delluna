export const name="map-pin-simple-area-thin";
export const id="dl_d3f0f84fe09547cdb9a7";
export const url=new URL("../icons/map-pin-simple-area-thin.svg?v=2e2e3901657edb213cbca4c516d289b165e85f7115eb76d7af5821101d40abc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
