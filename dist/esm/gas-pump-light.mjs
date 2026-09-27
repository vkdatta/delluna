export const name="gas-pump-light";
export const id="dl_0c1090a35d9745ccb67a";
export const url=new URL("../icons/gas-pump-light.svg?v=e9314eabdc15a3df1894274f4d9c1cfa0f3caeb365f0b895241272f65586b82a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
