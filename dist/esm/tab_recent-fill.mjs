export const name="tab_recent-fill";
export const id="dl_8156423abbac4877b164";
export const url=new URL("../icons/T/tab_recent-fill.svg?v=fe1138083851ea9528e59501b37515fdb574e4bd05366a0d9b9d0031daca36fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
