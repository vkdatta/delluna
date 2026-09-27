export const name="unpaved_road-fill";
export const id="dl_84e553698e900a921d68";
export const url=new URL("../icons/unpaved_road-fill.svg?v=347c231bb00af3f346fcafbd1acabd38640d798d4ed1cba5ae55280925e562ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
