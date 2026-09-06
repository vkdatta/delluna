export const name="file-tsx";
export const id="dl_3ea0979fcb064a58bce3";
export const url=new URL("../icons/file-tsx.svg?v=278a18fefd1696a5657e1fe9c9de3105f3ff444071df1f5bb2cbc8090afcd80b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
