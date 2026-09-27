export const name="lucid_2-ear-off";
export const id="dl_aa99a1f3252349b9a554";
export const url=new URL("../icons/lucid_2-ear-off.svg?v=057fadeea11746ee72147953acf4d44228ba9b698f6d7c24c7967479e0a821f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
