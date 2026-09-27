export const name="pool-fill";
export const id="dl_b1fce0df09e06cbbfdd0";
export const url=new URL("../icons/pool-fill.svg?v=0501417cabdcefff688114f3cf5a6616e4d77a1491053a55136ec41805ec7e07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
