export const name="three-d";
export const id="dl_ea1d2dc698ae449b901c";
export const url=new URL("../icons/T/three-d.svg?v=fd941c47e0e0647676e6ff4a3bd36b56b40e955e7b4999c4324e28b22631d541",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
