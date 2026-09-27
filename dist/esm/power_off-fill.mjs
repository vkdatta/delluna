export const name="power_off-fill";
export const id="dl_67c93f972f676d8e5ce5";
export const url=new URL("../icons/power_off-fill.svg?v=b37be84722e91cd5b5fa52c3a5b82d40ae4c4a602f9dab7c7015f8a1d78a6ad9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
