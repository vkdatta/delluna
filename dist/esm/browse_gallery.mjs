export const name="browse_gallery";
export const id="dl_f28ee1eeb3ea6fb6e26d";
export const url=new URL("../icons/browse_gallery.svg?v=d2975816737f69aac609943bbc93c5c99c3ec25e9a29081724fd984a2b80642c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
