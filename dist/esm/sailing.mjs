export const name="sailing";
export const id="dl_21cbccd01d8b47a08782";
export const url=new URL("../icons/S/sailing.svg?v=a9592030a0dafaa470efa83680c18a8fe3cfe5e3939dffdebfe336fd37d16958",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
