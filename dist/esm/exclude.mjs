export const name="exclude";
export const id="dl_7ecfda7192c549a6b064";
export const url=new URL("../icons/exclude.svg?v=f0859b832f54b002a3b6982dae105bbd1391643e386e967301b92a3545222b8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
