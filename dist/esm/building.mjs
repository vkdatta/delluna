export const name="building";
export const id="dl_386ad8834055448c8710";
export const url=new URL("../icons/building.svg?v=79544e1c7e1addef1c167708f5e1119946d912fc4ee2d64bd510ffd256c6ab0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
