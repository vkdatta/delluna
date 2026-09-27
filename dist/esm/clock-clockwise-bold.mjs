export const name="clock-clockwise-bold";
export const id="dl_a0ed055108234692a13a";
export const url=new URL("../icons/clock-clockwise-bold.svg?v=a990dcc1370a77500d9cc75f93678a0b3139f96d88033d109583e10c5b5e50de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
