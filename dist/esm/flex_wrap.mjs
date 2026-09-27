export const name="flex_wrap";
export const id="dl_dee435f56cc68abea2ec";
export const url=new URL("../icons/flex_wrap.svg?v=4919226569bd88afeaba8615f3e551c72f82fd6d64966816429a21dfd49e4912",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
