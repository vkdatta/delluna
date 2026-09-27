export const name="stretch-vertical";
export const id="dl_f18cb42b773e433fb42d";
export const url=new URL("../icons/stretch-vertical.svg?v=e72467142bc84e77b0cd6ea4b5b785e2b7008e708d2f58448f104fc1a3977768",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
