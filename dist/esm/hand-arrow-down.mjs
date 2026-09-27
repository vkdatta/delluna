export const name="hand-arrow-down";
export const id="dl_d27b09f3a27d408f8f55";
export const url=new URL("../icons/hand-arrow-down.svg?v=34fdcfdd11f5bfe11d6d609f408d17d6d4fc8bc33ea00e5a1a2b4131c3ee8e40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
