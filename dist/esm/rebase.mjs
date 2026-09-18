export const name="rebase";
export const id="dl_b3147cc90d884f3ebf4f";
export const url=new URL("../icons/R/rebase.svg?v=02e792c9035038ffa73352ae0705363128784eefe1f33c7ccbdebea9eae091dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
