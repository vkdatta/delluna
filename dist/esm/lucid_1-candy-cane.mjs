export const name="lucid_1-candy-cane";
export const id="dl_d2e4a0377c664e2da9b3";
export const url=new URL("../icons/lucid_1-candy-cane.svg?v=f4c57cd5c7507aa56d65e9547b75f8fde664410c6e04687d659dc3ee04d727b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
