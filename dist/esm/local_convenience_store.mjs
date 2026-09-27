export const name="local_convenience_store";
export const id="dl_c9b66874c0f8d51d753a";
export const url=new URL("../icons/local_convenience_store.svg?v=d22badab271f9b6a4d7471b493ef8d6e4d614f9904f01baa941ac36caf819596",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
