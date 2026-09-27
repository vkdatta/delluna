export const name="lucid_3-map-pin";
export const id="dl_3ba300a494f34d53b2a4";
export const url=new URL("../icons/lucid_3-map-pin.svg?v=501d17d81ab1f10db2e41135bf2fd064a8fbff768255adfc6854392d9a264211",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
