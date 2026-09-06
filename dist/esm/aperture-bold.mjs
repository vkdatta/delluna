export const name="aperture-bold";
export const id="dl_7ad023ab0abc47f2b8be";
export const url=new URL("../icons/aperture-bold.svg?v=7c3bccbab6b30c997baf42a0ee70b9ba8e3b9c1f04763ad2b06ba2a351d8c7af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
