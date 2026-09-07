export const name="bluetooth-connected-light";
export const id="dl_8a9d0fa10cfe48fe90c9";
export const url=new URL("../icons/bluetooth-connected-light.svg?v=34fb6addfadd2614abc0c01a7d14639ab33d8cec63b818325aec513fd0bfab69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
