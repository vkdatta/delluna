export const name="map-pin-simple-bold";
export const id="dl_00f5e2688b1c42a6a42f";
export const url=new URL("../icons/map-pin-simple-bold.svg?v=24cbefeca8cb52a7af57ceddec83d4478e29f3e9f7efdf643829ff1cf14c4ab9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
