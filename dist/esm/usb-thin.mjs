export const name="usb-thin";
export const id="dl_6590660c5541a0cf595b";
export const url=new URL("../icons/usb-thin.svg?v=e4d612d52446b5a3c43e5ae7ed62fa3db6e4ea1323733e300683379f77b3f86f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
