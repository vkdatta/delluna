export const name="remove_from_queue-fill";
export const id="dl_260f6324c455088f5067";
export const url=new URL("../icons/remove_from_queue-fill.svg?v=77ee9b82b823e1e825f8682e05786b86cb3187d210bbaa1cb215487463ed81ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
