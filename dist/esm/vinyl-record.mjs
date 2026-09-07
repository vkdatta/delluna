export const name="vinyl-record";
export const id="dl_323b76e8eb2a45a5addf";
export const url=new URL("../icons/V/vinyl-record.svg?v=9f670fdd8ae1b144f372b97b9be8acd0cc0d796d2e78607b58a4baa2683461e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
