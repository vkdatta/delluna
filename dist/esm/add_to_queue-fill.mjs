export const name="add_to_queue-fill";
export const id="dl_27a512b16516258ad892";
export const url=new URL("../icons/add_to_queue-fill.svg?v=bc9d332c3fc84e72b766220a9146cca7824bfa46efd15260b00caf0e8aec98e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
