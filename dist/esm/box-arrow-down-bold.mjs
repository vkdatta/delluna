export const name="box-arrow-down-bold";
export const id="dl_ea54e786f8d246489134";
export const url=new URL("../icons/box-arrow-down-bold.svg?v=87b567c8c15b31d07455fbfec483cc1cf895270124ecdf1329e6c37ed182242c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
