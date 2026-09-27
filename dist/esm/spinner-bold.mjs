export const name="spinner-bold";
export const id="dl_e41083c56703b31f75c0";
export const url=new URL("../icons/spinner-bold.svg?v=31cfb314378efe1e69eabb19b5f69b1438aa154549c3b6db4b62ec26d9b6ec65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
