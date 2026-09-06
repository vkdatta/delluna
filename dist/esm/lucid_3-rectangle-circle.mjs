export const name="lucid_3-rectangle-circle";
export const id="dl_738e6ce223804ca18267";
export const url=new URL("../icons/lucid_3-rectangle-circle.svg?v=5214ff4398c04010a6180a3c7692a1edab8c886184082eac4f82f035556c8b97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
