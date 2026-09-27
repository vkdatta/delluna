export const name="textbox-bold";
export const id="dl_8f55a3d77d5589d76825";
export const url=new URL("../icons/textbox-bold.svg?v=c3313724e683dbf82741b33dac5f037162e7820be6c011b6f61017179218933c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
