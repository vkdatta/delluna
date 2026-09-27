export const name="usb-bold";
export const id="dl_5dcd90f7ea20d0069a9f";
export const url=new URL("../icons/usb-bold.svg?v=0e01ff8548ca3061421114982fb8e2576ab6ef44fe7036522de662d037779216",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
