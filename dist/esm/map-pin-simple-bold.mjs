export const name="map-pin-simple-bold";
export const id="dl_00f5e2688b1c42a6a42f";
export const url=new URL("../icons/map-pin-simple-bold.svg?v=9e39a63a541c19556ce2d5e5e49ab6d094d769725c5517125ab683453075ce1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
