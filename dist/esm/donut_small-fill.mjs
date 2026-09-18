export const name="donut_small-fill";
export const id="dl_07da1561ad19461c8cf0";
export const url=new URL("../icons/donut_small-fill.svg?v=c988c073e310138f49d8f235431a365610ee7a8c158546bd784403905e19f180",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
