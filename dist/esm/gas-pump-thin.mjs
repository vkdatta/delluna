export const name="gas-pump-thin";
export const id="dl_f712a62750024f148314";
export const url=new URL("../icons/gas-pump-thin.svg?v=f611ac25d4ed2450127fe91bdc7ec64c3131d7b4411cdc1a01a23ac027018f9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
