export const name="door_back-fill";
export const id="dl_8c4308c2fcb21acf39b3";
export const url=new URL("../icons/door_back-fill.svg?v=51eeee6db77311ad2c63a99bbb3c955e6e4bca2f6cfece16b9bd35e0b366f8f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
