export const name="threads-logo";
export const id="dl_d2196e2ab0dd9e503a93";
export const url=new URL("../icons/threads-logo.svg?v=d4e63211108b079a72ee5a10afefe2c02b624f92336144b3c72ede452693ce23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
