export const name="circle-notch-duotone";
export const id="dl_5f02ab201b3444559c21";
export const url=new URL("../icons/circle-notch-duotone.svg?v=8dc0f6f4a60d2e71905207f010dba7183493aae7c53e6856790e70651ffcf3bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
