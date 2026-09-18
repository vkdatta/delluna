export const name="add-fill";
export const id="dl_93f5f26533e8414eac5e";
export const url=new URL("../icons/add-fill.svg?v=af9c14bac552f531361f2f943b234637fbf09b873f4b18e350596ecc6ccd97be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
