export const name="lucid_1-cloud-sync";
export const id="dl_d0ea3b78009640a1b672";
export const url=new URL("../icons/lucid_1-cloud-sync.svg?v=c1addb9a4438e815d5c2ac3c2c24e64bd46bc44de47e0bf4696fe74ff1c21426",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
