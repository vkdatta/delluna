export const name="arrow_circle_down-fill";
export const id="dl_27bc7f076e3640288360";
export const url=new URL("../icons/A/arrow_circle_down-fill.svg?v=e9476ff2973c8047cd2c71042ef9a5910b735bb2adb793d11d6d2dc1efc583c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
