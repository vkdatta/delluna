export const name="lucid_3-spool";
export const id="dl_7cd7dac745604f5caab4";
export const url=new URL("../icons/lucid_3-spool.svg?v=1ca72c73e0a20e638752138a97dd0c473c564db4c4b66e5556dad57e848833ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
