export const name="toggle-right-bold";
export const id="dl_ea8107b2438f45be8ae9";
export const url=new URL("../icons/T/toggle-right-bold.svg?v=344127dba0e82edd7f73d1014e116a646e611d54e368598f1b82c32400000fb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
