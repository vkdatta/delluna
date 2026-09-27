export const name="arrow_downward-fill";
export const id="dl_983a2207f1caab9ce55c";
export const url=new URL("../icons/arrow_downward-fill.svg?v=7cb8b4c3c62fa5cd4e94bb2419a2ca2c598992bb3641b147e3bb5622b1c0e94e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
