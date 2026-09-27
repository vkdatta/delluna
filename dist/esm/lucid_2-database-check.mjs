export const name="lucid_2-database-check";
export const id="dl_d011341c3b5f4757a649";
export const url=new URL("../icons/lucid_2-database-check.svg?v=eccee55a273ddf75d0ed07c26fdb3529eb823f55506e1e1689c0fa7237359754",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
