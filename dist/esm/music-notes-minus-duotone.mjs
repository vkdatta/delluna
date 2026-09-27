export const name="music-notes-minus-duotone";
export const id="dl_72f9094f8e8c4a0a8679";
export const url=new URL("../icons/music-notes-minus-duotone.svg?v=bc23559103436f9fa869af67fae78313a620b193ccc4a34adbe6f980c87563e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
