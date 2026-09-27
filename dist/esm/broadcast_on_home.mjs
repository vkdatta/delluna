export const name="broadcast_on_home";
export const id="dl_4e23f6269fb7b97b66b2";
export const url=new URL("../icons/broadcast_on_home.svg?v=0dbca86d18416d2617927b5267f6eddff5318ab5998eccd11cfe168923500b6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
