export const name="lucid_1-cigarette";
export const id="dl_db1c02aa63e64e85bb62";
export const url=new URL("../icons/lucid_1-cigarette.svg?v=1de491d7798ef3e100e443db13c41ae5c4c9b80e94454849ef61c31e9b036fae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
