export const name="towel-rack";
export const id="dl_908187b6a64d4e01816d";
export const url=new URL("../icons/towel-rack.svg?v=6a6a99fe8b647fe3d59afc7eaccafbf364a4c9c51652538f1244ab115b322a36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
