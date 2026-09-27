export const name="nested";
export const id="dl_9f91ba49691444e4ac7d";
export const url=new URL("../icons/nested.svg?v=8ce6941fc43b8e1449b1ea44840a3960cf1c94ee0e1abc68c8bd7faebfe07553",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
