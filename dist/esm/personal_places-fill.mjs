export const name="personal_places-fill";
export const id="dl_72951fbb5ebf593fb35d";
export const url=new URL("../icons/personal_places-fill.svg?v=383d21ac17b52236f4bd92ea9d54b4ba6566b4cca14425b577a72900bd193081",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
