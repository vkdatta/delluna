export const name="slab_serif-fill";
export const id="dl_ae28e2cc534af4bc9ad6";
export const url=new URL("../icons/slab_serif-fill.svg?v=8dde1f3c7e76c0779d07e297c6cfe4a51ff14516fd5ae0bb9f31bee7dd47ed45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
