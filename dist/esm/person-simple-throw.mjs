export const name="person-simple-throw";
export const id="dl_eb7cdcbdb8654373a2c7";
export const url=new URL("../icons/person-simple-throw.svg?v=7195607d83770e280f352b74ad92b3283b100b1d25b2c882f92fd1661a881808",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
