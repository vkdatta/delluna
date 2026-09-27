export const name="percent_discount-fill";
export const id="dl_c6e5436dfc6fa6994d66";
export const url=new URL("../icons/percent_discount-fill.svg?v=965afe657c96bd90a975f6cc7e55fe2c9dc228c2e317fe9a5fcf26f9157455ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
