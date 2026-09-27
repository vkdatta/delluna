export const name="local_police";
export const id="dl_d803eadbf250f25167d4";
export const url=new URL("../icons/local_police.svg?v=92be3cf5771dcef6e97b1dd9eb440c00c9ee267f4c8556d49d90289ab03a9590",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
