export const name="filter_remove";
export const id="dl_cb2b0de503e857d8cba8";
export const url=new URL("../icons/filter_remove.svg?v=e24f3520cd3b1150c6862b863e43c35ff8b3b499912c760213d920e7b45ab778",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
