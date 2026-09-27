export const name="lucid_1-calendar-range";
export const id="dl_1a045a4b908e4ece984d";
export const url=new URL("../icons/lucid_1-calendar-range.svg?v=ab92064ebcd482754e449d7d8adbadeabfa60e7ea2ad1750957a6a21d19e91bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
