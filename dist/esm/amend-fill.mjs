export const name="amend-fill";
export const id="dl_a2b42209b6da4a939ae8";
export const url=new URL("../icons/A/amend-fill.svg?v=98b722af0d2b6bde268fc046b1b8d6132f50f5c8f7965545d0cc9c6f9b6d578d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
