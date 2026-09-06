export const name="file-sql-duotone";
export const id="dl_dc342fc453aa4b80abb5";
export const url=new URL("../icons/file-sql-duotone.svg?v=7dbf48974ab70a00d33bcc2ae51dddeff972292387858a95c246dc52cb2b2d1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
