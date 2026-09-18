export const name="footprint-fill";
export const id="dl_daa11a7d87b1457481e4";
export const url=new URL("../icons/footprint-fill.svg?v=3291242e9083d7a214b11d06fbdc7fb417219de0ac61374d72f93f98bbb655d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
