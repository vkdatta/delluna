export const name="lucid_1-concierge-bell";
export const id="dl_3bf4ba50e86d4e6b839f";
export const url=new URL("../icons/lucid_1-concierge-bell.svg?v=24a2105e3a431e83417d856165b3344d74540d21aef23a3220e55bf0231b691c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
