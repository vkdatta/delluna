export const name="16mp";
export const id="dl_a4337ba8b079d360303d";
export const url=new URL("../icons/16mp.svg?v=83084a49a9d0c2207d095bb71bb40df1aa117b5564a02e846f1d77beed068c82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
