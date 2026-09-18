export const name="add_to_queue";
export const id="dl_f5c51ef6a50d4eb9872d";
export const url=new URL("../icons/add_to_queue.svg?v=19ec14f671b22f67fec48b30e3d4c32e571ae2bacc09e368e0cdb11687af40f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
