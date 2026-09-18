export const name="shield_person";
export const id="dl_f29175b631e4454fa057";
export const url=new URL("../icons/shield_person.svg?v=5fae12ad8cdb7fc8aa978aee9dee50ad584538998ee8c00ffb12cf7648d81378",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
