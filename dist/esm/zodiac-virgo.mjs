export const name="zodiac-virgo";
export const id="dl_60a37129485a4571b8dd";
export const url=new URL("../icons/zodiac-virgo.svg?v=622bc6b6343350f95759ae667c650d074717fe4e491f33302da36932c58d1650",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
