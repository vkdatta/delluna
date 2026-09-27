export const name="lucid_1-calendars";
export const id="dl_b6237eed411a4a299800";
export const url=new URL("../icons/lucid_1-calendars.svg?v=a1ecec577a640774185f35b227a3fbb60ce78ab84dcf973fd25f77062cb82391",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
