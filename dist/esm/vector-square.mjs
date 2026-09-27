export const name="vector-square";
export const id="dl_afe26bf808ea43e99efc";
export const url=new URL("../icons/vector-square.svg?v=043848fceea83b47808960d6ea562816cf465ddbb9e0ca526be7c0faabb4f1ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
