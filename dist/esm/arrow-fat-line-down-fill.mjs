export const name="arrow-fat-line-down-fill";
export const id="dl_e29b51564bbd449ba2ac";
export const url=new URL("../icons/arrow-fat-line-down-fill.svg?v=97e4355160548b1c0533b810e7fa2b1a7484232822de74f3810dc160988d0ef6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
