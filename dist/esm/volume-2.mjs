export const name="volume-2";
export const id="dl_3aa48d2527f4447e83bb";
export const url=new URL("../icons/volume-2.svg?v=cbac85dcc5527a542be491d2016aef71db1709a9be430c6b722ae9c0b3645ee2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
