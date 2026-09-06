export const name="check-circle-duotone";
export const id="dl_26ecfd92df41420fb35d";
export const url=new URL("../icons/check-circle-duotone.svg?v=d9c7016e83a81c8ef1a250a307acc6d29d5c492fc46066ab5e5e7446a65b48f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
