export const name="wb_twilight_2-fill";
export const id="dl_1ff8674854c20a116d2d";
export const url=new URL("../icons/wb_twilight_2-fill.svg?v=30a546bac93ad7539ab3c10ed8861a013300584024d8f9c6bd495e8ca81dd74f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
