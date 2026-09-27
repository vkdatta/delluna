export const name="lucid_1-banknote";
export const id="dl_fa9d47e8210f48cb9ec4";
export const url=new URL("../icons/lucid_1-banknote.svg?v=940ed1dbd1dd0bc47383018f11e641423831781b7004ad33a7a004bb7ce6913a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
