export const name="videotape";
export const id="dl_df8d35336c4d4499a6be";
export const url=new URL("../icons/videotape.svg?v=8248b2405f7b853387040ba344b09a95dfbd07b7d19402deb415395fbee2c27b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
