export const name="railway_alert";
export const id="dl_560390862ac3c67e54be";
export const url=new URL("../icons/railway_alert.svg?v=b221b91dd0632e2e3d2b6ca820a8390b3d365eb9d2452e6c1c2abceab9aa75fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
