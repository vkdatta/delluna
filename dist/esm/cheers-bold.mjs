export const name="cheers-bold";
export const id="dl_d975f5c953aa4d8c8173";
export const url=new URL("../icons/cheers-bold.svg?v=a90f59d5ba62a814a64ea9405db53bfc8c2e9d8498e19137cf95f269881d4024",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
