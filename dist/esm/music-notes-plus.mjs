export const name="music-notes-plus";
export const id="dl_a7d72c8698864c87b262";
export const url=new URL("../icons/music-notes-plus.svg?v=6b7e880f4068cd9843bd7b03e547c5a951f89cc877306451d4d4c44aacdfbce9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
