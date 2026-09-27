export const name="verified_user-fill";
export const id="dl_9a5fecea65b09ab3840b";
export const url=new URL("../icons/verified_user-fill.svg?v=7f14ea9f77911f441adb71e26ea368d43ea8b7a6cca4d92c490ae9accd752134",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
