export const name="lucid_3-monitor-x";
export const id="dl_2910c8c94707479d9512";
export const url=new URL("../icons/lucid_3-monitor-x.svg?v=8b0977ce274ffcc17c93e2ab9badfab3b685d6f39bfad1bca9fa37d6ccea8cbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
