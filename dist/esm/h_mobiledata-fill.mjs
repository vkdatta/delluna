export const name="h_mobiledata-fill";
export const id="dl_ae19a61275c5565c90fa";
export const url=new URL("../icons/h_mobiledata-fill.svg?v=7162f39f561f5a3e4ed7e65d846b3464a0b1773f579508463510a7aaee8ee329",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
