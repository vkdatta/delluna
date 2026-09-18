export const name="pinch_zoom_in";
export const id="dl_9ceb05a5382b47b2b3ef";
export const url=new URL("../icons/pinch_zoom_in.svg?v=8842d580cd89efc89642c36dca03b459ebc12e200008ca03e35a2cd95252612e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
