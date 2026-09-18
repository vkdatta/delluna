export const name="not_listed_location-fill";
export const id="dl_9cc769956ad34046a75f";
export const url=new URL("../icons/not_listed_location-fill.svg?v=e3e6ec57b2354f73d9400e825771250763fc9f888bb7e76dcb48e6bfd8de40c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
