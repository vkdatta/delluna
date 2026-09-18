export const name="upcoming";
export const id="dl_10a213fe48a04fd1b8e3";
export const url=new URL("../icons/upcoming.svg?v=e171f839222c7eea8d16fd9ff392e5657ac34510975a0978cd4172d850dd2d4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
