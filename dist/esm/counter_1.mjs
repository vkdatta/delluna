export const name="counter_1";
export const id="dl_e00bbe366dba22a21768";
export const url=new URL("../icons/counter_1.svg?v=42bf168b25fea63352892fba11a49b3555edeb699d14607a1ddb9cc883bfd72b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
