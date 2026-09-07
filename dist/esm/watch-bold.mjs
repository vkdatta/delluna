export const name="watch-bold";
export const id="dl_35d4c65d35bc49738f4c";
export const url=new URL("../icons/W/watch-bold.svg?v=3adb1db9890483e0e3a08556fc3315e423abf803a24af120c5062acd212c5823",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
