export const name="wifi_calling-fill";
export const id="dl_c546b122222af64372b0";
export const url=new URL("../icons/wifi_calling-fill.svg?v=420f88f9804bf4ac317b28503e5b488b259740614af929a92757bff4766b149d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
