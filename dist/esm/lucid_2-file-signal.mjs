export const name="lucid_2-file-signal";
export const id="dl_2a9cf0bc79844ffa8059";
export const url=new URL("../icons/lucid_2-file-signal.svg?v=40a167093509159e7832cb1934f00d6ce835bd23f5fdc967d92c013948c4e78d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
