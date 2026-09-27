export const name="lucid_3-refresh-cw-off";
export const id="dl_bb9fbb1d572044d7ad33";
export const url=new URL("../icons/lucid_3-refresh-cw-off.svg?v=7699dcb50d3911810f7a1911b5a9be7cdffc65a6347db99f2dba83fba17d19b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
