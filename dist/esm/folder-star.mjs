export const name="folder-star";
export const id="dl_cdbaf09af6444eb09bdc";
export const url=new URL("../icons/folder-star.svg?v=6fb398e7c9837f5b4cb9737853cb51dc32896816f9d57618b809e90870a85f00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
