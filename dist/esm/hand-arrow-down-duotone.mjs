export const name="hand-arrow-down-duotone";
export const id="dl_c2f7f659529c423d913d";
export const url=new URL("../icons/hand-arrow-down-duotone.svg?v=cab2e251c8b659e8c4d3a362f40778348607a9ef5287c1ba7a6304ff08b9e0ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
