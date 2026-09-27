export const name="bathroom";
export const id="dl_0c806ce2f9efba4de82a";
export const url=new URL("../icons/bathroom.svg?v=4ae02f9e8a105bec49e589a86d4fbb1a78d4c0d73d9444f858b2ff907e292cfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
