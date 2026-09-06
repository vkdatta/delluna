export const name="file-arrow-up-light";
export const id="dl_b599e594b42940b884c8";
export const url=new URL("../icons/file-arrow-up-light.svg?v=5d848a0fb840199278ad9f241ad471f9324e67f36baf5c75309b83b71de70fe6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
