export const name="lucid_3-pause";
export const id="dl_ffc28bfc15ae41bb8139";
export const url=new URL("../icons/lucid_3-pause.svg?v=28a48aa240f585dc15fbb5dd34266e2ecdb5611b9995695ae4eb44f896160d6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
