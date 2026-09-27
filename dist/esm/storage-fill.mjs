export const name="storage-fill";
export const id="dl_2338dbb67d1d403aa5fb";
export const url=new URL("../icons/storage-fill.svg?v=4484a71cf93fb4b63f041c9d9a38f1bad3e12a8b0deea12f312fb4c1d997ec95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
