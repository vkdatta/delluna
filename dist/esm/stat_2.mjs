export const name="stat_2";
export const id="dl_e26586fe35044f4281fc";
export const url=new URL("../icons/S/stat_2.svg?v=11e9b7774ebd45c5785cbd840ad08ab96dffe08cd9a9d0c16c2eb2a4081fd3ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
