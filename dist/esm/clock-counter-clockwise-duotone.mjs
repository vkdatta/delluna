export const name="clock-counter-clockwise-duotone";
export const id="dl_8c9871a3dd9e4a51970d";
export const url=new URL("../icons/clock-counter-clockwise-duotone.svg?v=4de8888a05bd3b4cabcce6135f48d89f8606c3b237ac1b2e9fbcc90cc17fd855",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
