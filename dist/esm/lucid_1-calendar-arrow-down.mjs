export const name="lucid_1-calendar-arrow-down";
export const id="dl_77e8d298e4334c8fb5c4";
export const url=new URL("../icons/lucid_1-calendar-arrow-down.svg?v=b66f126c2cf6c6a07bddaaf32b9a1099f0084765d92dc8282f25472a15b0c8c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
