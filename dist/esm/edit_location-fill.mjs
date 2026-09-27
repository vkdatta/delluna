export const name="edit_location-fill";
export const id="dl_9a44053ebe8e464879dc";
export const url=new URL("../icons/edit_location-fill.svg?v=7e585670e5a1ff0c1f9e820cb2888e69552a7cb3cc65e8bcc5f306436f81b7c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
