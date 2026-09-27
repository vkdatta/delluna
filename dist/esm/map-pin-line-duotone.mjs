export const name="map-pin-line-duotone";
export const id="dl_719763a126e948e1a36d";
export const url=new URL("../icons/map-pin-line-duotone.svg?v=b80063892437224def9967d192d30728f2c4f5f5473da17d6d599e656255a97c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
