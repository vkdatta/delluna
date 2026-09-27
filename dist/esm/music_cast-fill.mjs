export const name="music_cast-fill";
export const id="dl_807d8fa3a6064a4611c9";
export const url=new URL("../icons/music_cast-fill.svg?v=784d72ea82a98b6553cfd2719d05325456a9b48d22591886ed6f63862692a5fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
