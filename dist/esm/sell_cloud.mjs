export const name="sell_cloud";
export const id="dl_2f008705a2f006e218ad";
export const url=new URL("../icons/sell_cloud.svg?v=c8ab04945016c7dc7c914ca803192fce0e10a46a6a3c6f90621814c7dbd87d5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
