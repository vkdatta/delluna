export const name="alarm_smart_wake-fill";
export const id="dl_08db055906edec0225cf";
export const url=new URL("../icons/alarm_smart_wake-fill.svg?v=2920e5ef6fec1fdcf8c5f23470d172c7208911c6e068db6e73b6e842e308de50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
