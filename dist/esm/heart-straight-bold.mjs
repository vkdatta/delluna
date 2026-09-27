export const name="heart-straight-bold";
export const id="dl_7b4a8e1594e84ebfb617";
export const url=new URL("../icons/heart-straight-bold.svg?v=7480455c07162c0804100e2bfd2edcf4d365379b61152ffc089b55d24e79a1fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
