export const name="backup-fill";
export const id="dl_75654c5849a7a050b8f4";
export const url=new URL("../icons/backup-fill.svg?v=ec35f1fb8c9cd9b9825845b7c6448dc26c4ea83967ca79cdb8593bdc2e9a44b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
