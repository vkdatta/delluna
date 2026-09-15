export const name="battery_plus";
export const id="dl_72245cb58c65430a9dd3";
export const url=new URL("../icons/B/battery_plus.svg?v=50243df8d332edbf07be31661d67b0b519fb9c11bdb4fabdcf26cbbd4161808e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
