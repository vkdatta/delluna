export const name="magnet-fill";
export const id="dl_c8e69b3e4cd646a98838";
export const url=new URL("../icons/magnet-fill.svg?v=ca94dd0151d75dedd2389002d5d00e8d6e5ed4956db2f9976090ff20b3420a6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
