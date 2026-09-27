export const name="lucid_1-audio-lines";
export const id="dl_74d9bb4dcfbe4ee8b347";
export const url=new URL("../icons/lucid_1-audio-lines.svg?v=b9e85eda2a6f5ddf01dec39ce571fc6657002bfd8792485825ed0043f303831a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
