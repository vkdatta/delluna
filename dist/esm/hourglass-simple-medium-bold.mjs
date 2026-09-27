export const name="hourglass-simple-medium-bold";
export const id="dl_3d389fce6f5948fdbbbf";
export const url=new URL("../icons/hourglass-simple-medium-bold.svg?v=50a6d5f63cc190135b097a2bba423d84cc19b1e9b1604ea187ad38e0b8dbb32d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
