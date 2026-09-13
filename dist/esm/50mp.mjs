export const name="50mp";
export const id="dl_663ba1223bd24cc48cde";
export const url=new URL("../icons/5/50mp.svg?v=dfbabbee5320046d638ca538f5bc0339e9b03c20d9621e20c03ac7a8fd04574d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
