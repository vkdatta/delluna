export const name="lucid_3-snowflake";
export const id="dl_e0b61b578b944c8c9876";
export const url=new URL("../icons/lucid_3-snowflake.svg?v=a3b03aa7ec5250159cd392fe0c989f6695561163d8e96bd993d8675c891fa13f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
