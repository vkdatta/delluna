export const name="text-search";
export const id="dl_cee180a80e3b40b693b4";
export const url=new URL("../icons/text-search.svg?v=11f66ef0b29db5bf8d2601c582e4f7c5d1d9096fccc85c05de7d17fc7e44fc9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
