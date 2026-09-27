export const name="lucid_1-bell-check";
export const id="dl_f6f52c5c28d747719d0c";
export const url=new URL("../icons/lucid_1-bell-check.svg?v=1663dc4fbb25d8d019101b8d2f6d394e132f75d48a1db63069d3ad58e6ae1a7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
