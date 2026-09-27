export const name="delete";
export const id="dl_570df95c9fae9008cb27";
export const url=new URL("../icons/delete.svg?v=7f9ec847f9ab4ad3925173337db660645fcf7b19c7eb383eb05aa5beec495453",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
