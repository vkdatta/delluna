export const name="intersect-square-thin";
export const id="dl_a38f789d98274b949181";
export const url=new URL("../icons/intersect-square-thin.svg?v=f63c45c61d12d73257105b78dc3bd286647bca3c2b7932b2ca4e46148ad5d570",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
