export const name="lock_open-fill";
export const id="dl_0bbb8a4890ede6ed9bb3";
export const url=new URL("../icons/lock_open-fill.svg?v=05ec131517ac13d2b842b1202366d66e281f851be26787078c85b418c0b16ef8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
