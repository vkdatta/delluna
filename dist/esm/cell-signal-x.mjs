export const name="cell-signal-x";
export const id="dl_ec86504ea4a046e7941d";
export const url=new URL("../icons/cell-signal-x.svg?v=ed35e35cc7f4ae3b0f5d318dc6443af75bf262eb0af25af8fb8963879c9a327c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
