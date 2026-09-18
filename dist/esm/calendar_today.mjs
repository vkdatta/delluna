export const name="calendar_today";
export const id="dl_0bb66c357dbe4204a928";
export const url=new URL("../icons/calendar_today.svg?v=9e69497b39b2d62098f08a21839a774a0a42d1173d3e6bf26466586a0bac34ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
