export const name="ods";
export const id="dl_d8825be8c7ce348b51ed";
export const url=new URL("../icons/ods.svg?v=9605eba31dec2b29fa63c421e2f7ea5c5afcc3dc2312a40f7d22ccf30d9fc51d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
