export const name="sync_saved_locally-fill";
export const id="dl_0e8e75dbce4c92fd9780";
export const url=new URL("../icons/sync_saved_locally-fill.svg?v=b13e6627c8258b6ce52d62f9c5892f6a133784915c61adcde6a611811460075d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
