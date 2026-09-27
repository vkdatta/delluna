export const name="swords";
export const id="dl_659ef1d68d13091d9674";
export const url=new URL("../icons/swords.svg?v=80b0065750879051034df363d69417cbe00b6a4f8f384f966d817b09e103ec57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
