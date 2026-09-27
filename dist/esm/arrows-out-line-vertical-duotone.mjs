export const name="arrows-out-line-vertical-duotone";
export const id="dl_d913d6aea00e4455b099";
export const url=new URL("../icons/arrows-out-line-vertical-duotone.svg?v=e2bfe55b0e759a5b3e7963d3fb71bba16c7d759844297f7ec31e5c1933c91d5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
