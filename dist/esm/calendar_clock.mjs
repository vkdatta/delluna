export const name="calendar_clock";
export const id="dl_bd0e21423fdd6dbfe9eb";
export const url=new URL("../icons/calendar_clock.svg?v=e1bfd065b426f60a17384f5685385be73552f2aeb0bef11f18ae3532c48211e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
