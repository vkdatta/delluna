export const name="details-fill";
export const id="dl_6125b224b092aab29c12";
export const url=new URL("../icons/details-fill.svg?v=e81723ae128aea7ce49be728586951d84173099048946f55cf132b483131c276",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
