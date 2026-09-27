export const name="music-note-light";
export const id="dl_5bafdcbd2e044a62bdfe";
export const url=new URL("../icons/music-note-light.svg?v=34be1dc2c86f634ae48dc0bc7522e6718596630e4b9eadaaaca6a7fda24cf012",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
