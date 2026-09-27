export const name="lucid_2-droplets";
export const id="dl_a0fe2834753b4bfdbffc";
export const url=new URL("../icons/lucid_2-droplets.svg?v=19f87420b3a5140ea27dd1a9d975103943868852c9758a36fb97775ea0316cfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
