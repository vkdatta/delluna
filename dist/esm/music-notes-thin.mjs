export const name="music-notes-thin";
export const id="dl_685843455522443486ea";
export const url=new URL("../icons/music-notes-thin.svg?v=2c18457f78ee542f6614ccd74159f8e25c80425200bc8e79849be8349e8eae4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
