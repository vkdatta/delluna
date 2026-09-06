export const name="repeat-once-fill";
export const id="dl_69a9799d38c949939b4f";
export const url=new URL("../icons/repeat-once-fill.svg?v=6fe280758047324c9a7bc55b4b8291b5dca76082cc444351f52a650751d6a41c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
