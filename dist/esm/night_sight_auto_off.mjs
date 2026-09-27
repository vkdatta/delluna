export const name="night_sight_auto_off";
export const id="dl_2c30f4364cf05e0b8b89";
export const url=new URL("../icons/night_sight_auto_off.svg?v=08070e9eb8ff8c9a9655f4bad4aa6a3aefd8f014637743602c907c346a2587f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
