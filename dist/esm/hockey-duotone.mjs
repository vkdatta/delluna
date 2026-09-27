export const name="hockey-duotone";
export const id="dl_c57716e875c5469388ac";
export const url=new URL("../icons/hockey-duotone.svg?v=d5943ec991c391f6a4f71ecff6af930b2c42ccfd315e692e905ffa22547bf322",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
