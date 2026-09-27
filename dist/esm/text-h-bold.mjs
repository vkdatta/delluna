export const name="text-h-bold";
export const id="dl_7f81a92c82004c010df9";
export const url=new URL("../icons/text-h-bold.svg?v=a231625b9bd70f7e566ab3858006bd46251a9205fb870ff0da3e70b8daf53a60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
