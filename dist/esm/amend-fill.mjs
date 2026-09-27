export const name="amend-fill";
export const id="dl_02caf94ff9bc0f1af8a9";
export const url=new URL("../icons/amend-fill.svg?v=b024bd9f478c31b6bb7cf1f4ba2b783def1e5a60ca7c35e8dd84f5bda01e4bf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
