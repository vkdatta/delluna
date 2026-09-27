export const name="explicit";
export const id="dl_81186ea785cf29c2e14b";
export const url=new URL("../icons/explicit.svg?v=6013da71911f900d980d284123fecda31efb3cbe7588ce11372d3cdbb0ad6171",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
