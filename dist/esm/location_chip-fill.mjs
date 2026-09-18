export const name="location_chip-fill";
export const id="dl_dded1b001b08401a8a42";
export const url=new URL("../icons/location_chip-fill.svg?v=f4d932d7eeab9c4f6d9c541d540ef6c9dae8563078f4e02abbcae6c704da857e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
