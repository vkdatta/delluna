export const name="filter_7";
export const id="dl_981d11c6c343865a7228";
export const url=new URL("../icons/filter_7.svg?v=ee11cc34fb001745dc2b7e69d37d78bd130831cb50dff8932dd7da494ae4a015",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
