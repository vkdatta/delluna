export const name="lucid_2-eye-off";
export const id="dl_7d488b9a504f4fdd82b9";
export const url=new URL("../icons/lucid_2-eye-off.svg?v=ceb5551c1928980640a5ee3a340b31aeb7cd52e4104a4b1dd399f13d4aa7d1b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
