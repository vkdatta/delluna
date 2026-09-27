export const name="flowsheet-fill";
export const id="dl_99828cfdacac7bf08610";
export const url=new URL("../icons/flowsheet-fill.svg?v=1fb18c0a3ce46d0bf1164b9edf352b9b86cbedf139c0e7572752f882cd2f71f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
