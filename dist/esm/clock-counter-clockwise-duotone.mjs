export const name="clock-counter-clockwise-duotone";
export const id="dl_8c9871a3dd9e4a51970d";
export const url=new URL("../icons/clock-counter-clockwise-duotone.svg?v=4e5a8f91fbe4376527c35c66cc4f3bb8001e3701b76aec4d42a5f3807b7655fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
