export const name="voice_selection-fill";
export const id="dl_8dda20f42955805165af";
export const url=new URL("../icons/voice_selection-fill.svg?v=99e2d2fe4be09179447771a8b2d46e6b5584aa8b6259034b47c8509e83d9d190",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
