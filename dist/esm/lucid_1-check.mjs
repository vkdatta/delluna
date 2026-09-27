export const name="lucid_1-check";
export const id="dl_19037d8510ca4be0a45a";
export const url=new URL("../icons/lucid_1-check.svg?v=31db2df23708ac04298794bb4ec5c639ef915d6b8002b4addbfd2196b1b402a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
