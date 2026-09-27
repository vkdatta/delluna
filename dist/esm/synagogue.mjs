export const name="synagogue";
export const id="dl_c3c40ed2732f02f15f2f";
export const url=new URL("../icons/synagogue.svg?v=72cdf3d4fbf29fb8e75edc2d5f56899d971579f14cdd93a42647db701ca9788d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
