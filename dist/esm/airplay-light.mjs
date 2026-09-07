export const name="airplay-light";
export const id="dl_c4610438a8834fa4bbf1";
export const url=new URL("../icons/airplay-light.svg?v=66ff3fd8e0345dcd9a2e574bbdbca98e0e98ec7cf540fc818dd072cc3c0bfd77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
