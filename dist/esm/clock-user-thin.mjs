export const name="clock-user-thin";
export const id="dl_49d97d074cca4c388838";
export const url=new URL("../icons/clock-user-thin.svg?v=d2fe4be88999879c714f8732e1eaa7bd82a7acb27eebf4c267a4334ebd12fb3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
