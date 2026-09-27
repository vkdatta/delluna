export const name="health_metrics";
export const id="dl_5d88d5f1d2968c38756d";
export const url=new URL("../icons/health_metrics.svg?v=ef611dc4152a39247c745f22a8e47c61d57f78256edbbae95fba54a21c13cc5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
