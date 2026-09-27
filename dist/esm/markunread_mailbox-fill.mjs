export const name="markunread_mailbox-fill";
export const id="dl_7340a3c9aee1e7f90274";
export const url=new URL("../icons/markunread_mailbox-fill.svg?v=7d3cb953d5bf80da624577fc551974bbd669372e1e9a7ed4d93b2118c6b99f74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
