export const name="beer-bottle";
export const id="dl_9c493d03224247bba50e";
export const url=new URL("../icons/beer-bottle.svg?v=188f1e5a2ab69804ad695869ab6feb5396beb5daf1eb8aebbf3ce247aa45dd7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
