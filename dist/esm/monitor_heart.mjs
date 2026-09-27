export const name="monitor_heart";
export const id="dl_f8a50c22904b95555c02";
export const url=new URL("../icons/monitor_heart.svg?v=5aa493951f2cafab4922027045c56d9fa2bdd172c2581aec3ad2e36d0b9c503a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
