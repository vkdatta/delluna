export const name="remove_selection-fill";
export const id="dl_0a8c7b8e62f73ca2bd3c";
export const url=new URL("../icons/remove_selection-fill.svg?v=4ab224dae2b9cb6faa3a4590088662697e06eca60f5270ee717a671a30641e3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
