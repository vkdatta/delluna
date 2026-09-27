export const name="rug-bold";
export const id="dl_3e93942c35154d269f6e";
export const url=new URL("../icons/rug-bold.svg?v=e374c43bd3e8a820cdc7deb1a0db67c337162ca64f917ab06acdb858ba8ce09c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
