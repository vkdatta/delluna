export const name="lucid_1-chess-king";
export const id="dl_838c5cfde9a647c88ad3";
export const url=new URL("../icons/lucid_1-chess-king.svg?v=e86e756545325d8b525f1a270329abe62c8be0b276f79386f627c4a71ed46d4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
