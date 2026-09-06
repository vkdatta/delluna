export const name="lucid_3-palette";
export const id="dl_a482b06081964538af4d";
export const url=new URL("../icons/lucid_3-palette.svg?v=4cedcfffd678ea93e3a5bc6e4e2748298206af261f236bc91c706adee7e3067c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
