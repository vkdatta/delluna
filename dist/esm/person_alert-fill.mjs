export const name="person_alert-fill";
export const id="dl_4afd20a7adb556743377";
export const url=new URL("../icons/person_alert-fill.svg?v=36e592c7020fc9fa00f4e17fd81cc33c44e9a6fac93edad39a935f0e11a346d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
