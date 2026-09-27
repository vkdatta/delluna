export const name="playlist-duotone";
export const id="dl_05d5ee37d3cc4076b7fb";
export const url=new URL("../icons/playlist-duotone.svg?v=12d63ac5b436b0dbbfb94391762fd15b913996f6203b386f3b011e6e16606179",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
