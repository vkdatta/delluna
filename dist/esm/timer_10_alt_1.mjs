export const name="timer_10_alt_1";
export const id="dl_dd70594763645885451e";
export const url=new URL("../icons/timer_10_alt_1.svg?v=6ff0ddc23534f7f8d851cfecb567d4778028fcf39c0f7dc6e9957e63c4eb6c20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
