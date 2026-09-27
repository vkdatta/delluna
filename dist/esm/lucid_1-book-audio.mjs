export const name="lucid_1-book-audio";
export const id="dl_065389fca36a47e98b05";
export const url=new URL("../icons/lucid_1-book-audio.svg?v=0a64b2ad45df5943c7e7bdb13c6d10be33f8da53384e6721976d847a797ec353",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
