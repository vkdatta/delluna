export const name="house-line-bold";
export const id="dl_c06271b5fe764829a739";
export const url=new URL("../icons/house-line-bold.svg?v=b78774511817b908596de0c99d0c1580f62fdb2b4a5a1b4a14bc1e2f1dae2e08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
