export const name="add_to_queue-fill";
export const id="dl_f7d4eae1f76c4995b85d";
export const url=new URL("../icons/add_to_queue-fill.svg?v=2b88219e302494b04eff1e25ac95b60d0b076eb9c34fecf9911b5c7b27ba21c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
