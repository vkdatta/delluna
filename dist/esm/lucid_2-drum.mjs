export const name="lucid_2-drum";
export const id="dl_c68e07fac3b148f482a5";
export const url=new URL("../icons/lucid_2-drum.svg?v=5c03cbb461d566bf7c276083b1481ddf3941886ee5c8a75d9078a879cf5b8831",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
