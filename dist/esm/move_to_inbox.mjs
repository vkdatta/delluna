export const name="move_to_inbox";
export const id="dl_a503bab31ea74e96990f";
export const url=new URL("../icons/M/move_to_inbox.svg?v=15f39493c2325e7ee0c8f8fa09b83fc8ffcb890005437565dcbb2f90396b7f61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
