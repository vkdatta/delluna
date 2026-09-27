export const name="restore_page-fill";
export const id="dl_8deea144b960999dbf8a";
export const url=new URL("../icons/restore_page-fill.svg?v=8d0b1c6fd6c46dde4bbd11664cf620005fd85269792b38c28fc46bf916dbe399",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
