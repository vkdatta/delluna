export const name="subtract-square";
export const id="dl_16075ddb5c2080aa15ce";
export const url=new URL("../icons/subtract-square.svg?v=8dbadaff3bfaf9fe95a371ad3d2d91d9cfc442646dadbfc4c7f8859dffb89da7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
