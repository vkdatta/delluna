export const name="hard-drive-bold";
export const id="dl_ad9d46ee58db4783824a";
export const url=new URL("../icons/hard-drive-bold.svg?v=6e24ef2b45cf40878b848bc5158d28ac38836d679ffefc5f49eba6bc648dc672",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
