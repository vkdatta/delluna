export const name="zodiac-scorpio";
export const id="dl_971753d2637149188ca1";
export const url=new URL("../icons/zodiac-scorpio.svg?v=57dd46919681fe40c63980271d6ec42c10533b2cf820cc7d112c2117eae8524f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
