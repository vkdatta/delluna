export const name="hdr_plus_off";
export const id="dl_c99830da1e004d9b9ae9";
export const url=new URL("../icons/hdr_plus_off.svg?v=86be3027d1c30c05f9c8a90a78d2ae1d6089c44c3730060ece88954c70fe5b70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
