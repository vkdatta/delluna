export const name="file-jsx-bold";
export const id="dl_d51a847f9e644c44a793";
export const url=new URL("../icons/file-jsx-bold.svg?v=4abae877f4bd78dba6bf95a576746836a9a5d425249514c8d69ca3261fe93e20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
