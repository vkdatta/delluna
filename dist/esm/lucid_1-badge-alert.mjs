export const name="lucid_1-badge-alert";
export const id="dl_6b6d787a3b584258bc4e";
export const url=new URL("../icons/lucid_1-badge-alert.svg?v=80a01558632783be4e84f7c0a03fef682dfd74b689d8636995da9e0e4de3fda1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
