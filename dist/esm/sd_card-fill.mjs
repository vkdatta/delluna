export const name="sd_card-fill";
export const id="dl_4e8d7f1b5903912b713e";
export const url=new URL("../icons/sd_card-fill.svg?v=00b1bd25f22585a902d3cce4dbcf64180318ed3bc93b33b6d3188f8aba7c9bea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
