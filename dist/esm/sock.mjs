export const name="sock";
export const id="dl_ffda5f970a8309bb6fbd";
export const url=new URL("../icons/sock.svg?v=d3c18ab2804dcb111e97f7a33e30508b65724595ad47c9984543e56d032a7385",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
