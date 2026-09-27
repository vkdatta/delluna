export const name="burst_mode-fill";
export const id="dl_8966813a35229718d0d3";
export const url=new URL("../icons/burst_mode-fill.svg?v=d69904734cd62e1a431952e25765c02b65686f61138192801d605359c58c0814",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
