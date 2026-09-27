export const name="hand-deposit-fill";
export const id="dl_355c280dce7a49228af4";
export const url=new URL("../icons/hand-deposit-fill.svg?v=d5abf31b811aaf0398cfe6d96dbfd61f946514068eb4057f1e06f0dbeee7b079",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
