export const name="map-pin-simple-area-thin";
export const id="dl_d3f0f84fe09547cdb9a7";
export const url=new URL("../icons/map-pin-simple-area-thin.svg?v=730d9db281f9b327c11b87fc955f86920cba42d536936142a3922e9eb1974861",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
