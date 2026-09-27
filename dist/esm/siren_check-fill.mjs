export const name="siren_check-fill";
export const id="dl_878e4ba9dbe173000ad5";
export const url=new URL("../icons/siren_check-fill.svg?v=4f23e766f8806143ed35ec89725550f10d783118b88d40f1613fe07afc996ee8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
