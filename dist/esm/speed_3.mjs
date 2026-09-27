export const name="speed_3";
export const id="dl_d4f21ac1f8d2ad638816";
export const url=new URL("../icons/speed_3.svg?v=929afbe775173e1508360909721d17c60f9b11afbeedb006af1d82e2bd89a7f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
