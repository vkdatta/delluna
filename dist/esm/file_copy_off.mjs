export const name="file_copy_off";
export const id="dl_c4167db2e900a885cf17";
export const url=new URL("../icons/file_copy_off.svg?v=e4b4fe412f905c9c057c10cbb898f867335341f5fc33888f30357112787439fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
