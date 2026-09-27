export const name="box-arrow-down-bold";
export const id="dl_ea54e786f8d246489134";
export const url=new URL("../icons/box-arrow-down-bold.svg?v=1a32cc7f8f5f7a584b7a882cca60849126244752837253e325ca26434a5e4af7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
