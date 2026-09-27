export const name="docs";
export const id="dl_6e6ae0d5a90c70390781";
export const url=new URL("../icons/docs.svg?v=a33a9147009dd09123e0441b5d9dd085d955c5a6f8cef477b1f7fb5871a06fc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
