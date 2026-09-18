export const name="sync_lock";
export const id="dl_d0ddd6085bc94fbb9844";
export const url=new URL("../icons/sync_lock.svg?v=e6b5860e09d5faf22379ba3eab504480e5f6cd231aa0ba61b6fda4a00c612e65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
