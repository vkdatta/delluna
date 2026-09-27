export const name="piano_off";
export const id="dl_de259263ac2071ad41cb";
export const url=new URL("../icons/piano_off.svg?v=9d71e11932eb49f6b034a2c04ae17002e4a8421cbef3c3545e8cbb6225fb1867",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
