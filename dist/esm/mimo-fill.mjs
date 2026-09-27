export const name="mimo-fill";
export const id="dl_9b28a389108c95cf1e39";
export const url=new URL("../icons/mimo-fill.svg?v=a585be634c70f03cc2f9ffc85f4e21d4acf5418a610e4b0ff95bf290922c662f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
