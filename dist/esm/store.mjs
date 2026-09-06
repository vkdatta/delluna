export const name="store";
export const id="dl_3d80b7d66e614b07b9b2";
export const url=new URL("../icons/store.svg?v=b6cff8c4645e52e745372043c6ba89c01a528da60e4cb1ba6fa922e311ef9644",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
