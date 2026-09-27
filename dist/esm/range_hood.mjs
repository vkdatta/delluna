export const name="range_hood";
export const id="dl_f6df7065bb37d5f52561";
export const url=new URL("../icons/range_hood.svg?v=f1bbdd4f7d11edc736b5dbb153dad73d9b6097f790ce8a41e1e05db6b3044458",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
