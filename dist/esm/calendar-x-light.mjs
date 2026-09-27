export const name="calendar-x-light";
export const id="dl_fa8bee55194a47c28c62";
export const url=new URL("../icons/calendar-x-light.svg?v=1add5f7f7603257311602ec2e8422599b3832ce9dba78e7c602a9d0276ea743a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
