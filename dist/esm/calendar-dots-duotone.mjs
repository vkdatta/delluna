export const name="calendar-dots-duotone";
export const id="dl_2b491caacc0f4e058959";
export const url=new URL("../icons/calendar-dots-duotone.svg?v=dbdea342e48252048883eb6b457e99299c847db361546c4282a28cdfd7e1b190",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
