export const name="hearing_aid";
export const id="dl_16226dfd29ad722c5768";
export const url=new URL("../icons/hearing_aid.svg?v=1f94947fa2785cd9ac79f46eb19199e49f7e743df848446870d9cf3c69c69e93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
