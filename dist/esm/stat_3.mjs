export const name="stat_3";
export const id="dl_d020e7cb08416923b137";
export const url=new URL("../icons/stat_3.svg?v=1fd407a340cb4ca83bc567c6ab9d06cad578e8cf0f5c636b0e461d443529243a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
