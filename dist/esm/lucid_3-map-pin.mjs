export const name="lucid_3-map-pin";
export const id="dl_3ba300a494f34d53b2a4";
export const url=new URL("../icons/lucid_3-map-pin.svg?v=e997e2e6b1178648c8d9ea954c96b2330842db743d954eada4b93b8812d57397",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
