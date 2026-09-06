export const name="waves-arrow-down";
export const id="dl_f1c4747891b2497b92e3";
export const url=new URL("../icons/waves-arrow-down.svg?v=909b5a000c8c0fff339bee9eee05c44f5ff8115540ced03b100a0b0bd4921fe7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
