export const name="currency-krw-thin";
export const id="dl_de1fe99952d5404dad6d";
export const url=new URL("../icons/currency-krw-thin.svg?v=d81c5cfffc250c77491b35121a5cde6567325cecf55a6162110df683c045185b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
