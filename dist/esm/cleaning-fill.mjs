export const name="cleaning-fill";
export const id="dl_720b8b7bfaec6a4efe4b";
export const url=new URL("../icons/cleaning-fill.svg?v=c4d79833027d9de09b38b6a9391753c82820d6716e2b8bf58671b62ffec8974c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
