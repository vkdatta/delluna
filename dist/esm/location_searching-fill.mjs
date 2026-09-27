export const name="location_searching-fill";
export const id="dl_5cd28124de1e354e784d";
export const url=new URL("../icons/location_searching-fill.svg?v=d02d88d5bba19d2decd1a75f37c33d71c18aa6deabb294c7e05eafb1eb3912e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
