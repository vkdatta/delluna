export const name="lock-laminated-open-fill";
export const id="dl_5e052d22113741c0b7fd";
export const url=new URL("../icons/lock-laminated-open-fill.svg?v=6cab7fe5c3bc9fe4d678602bc76f22965a5fb7cf046c485b952a6e63528306ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
