export const name="sync_disabled-fill";
export const id="dl_614c3b191f43f78f765a";
export const url=new URL("../icons/sync_disabled-fill.svg?v=bea7c3aa3c01ad3b955ebb16ab27ab3459cfc942add6a35af9df9b4195461688",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
