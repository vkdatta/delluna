export const name="voting_chip-fill";
export const id="dl_938026c51611f777a780";
export const url=new URL("../icons/voting_chip-fill.svg?v=03ec12d88e48911c005bb399e1ee5a80c2764767a420fb626434de6f5c391318",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
