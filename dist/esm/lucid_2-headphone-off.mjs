export const name="lucid_2-headphone-off";
export const id="dl_ceca4958b4924175bde7";
export const url=new URL("../icons/lucid_2-headphone-off.svg?v=2bb4be51655086c289694d9c50e74c14f269069e8698108e3b5ae364c60476dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
