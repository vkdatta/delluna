export const name="flash_off";
export const id="dl_ea7beabd935a870d0762";
export const url=new URL("../icons/flash_off.svg?v=3247222f8846875f62984e2ae69d2c95ffda073b24e7730fe02944cc1494d8c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
