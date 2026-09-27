export const name="hand-pointing-thin";
export const id="dl_f94522bd94d94f95a106";
export const url=new URL("../icons/hand-pointing-thin.svg?v=5c5ffa380b2502c82a162d0a2989b1ecebc2a45cf7c08a93ead74cd3abeb604a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
