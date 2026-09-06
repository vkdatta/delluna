export const name="bug-beetle-duotone";
export const id="dl_762ab8fdb67f483baee0";
export const url=new URL("../icons/bug-beetle-duotone.svg?v=24fb88ff0d3c50ad722967c6256616990a7ebcdfc1b50fb5e7f74db05689f19e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
