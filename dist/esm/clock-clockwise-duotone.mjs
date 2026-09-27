export const name="clock-clockwise-duotone";
export const id="dl_abd12597e99d419d8369";
export const url=new URL("../icons/clock-clockwise-duotone.svg?v=4543bbddcc7f3a3e78e77bddf2ed294ccf3e4c6f4433736ad74b3b464387bebe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
