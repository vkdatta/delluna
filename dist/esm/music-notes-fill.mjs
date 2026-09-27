export const name="music-notes-fill";
export const id="dl_54969aedc3e74035ae13";
export const url=new URL("../icons/music-notes-fill.svg?v=113db10131f6b132de3868e89a48f288e42214165ac4b4fa729249888da2b85d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
