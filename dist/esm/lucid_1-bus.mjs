export const name="lucid_1-bus";
export const id="dl_345d053e01c344e4871a";
export const url=new URL("../icons/lucid_1-bus.svg?v=05ca08ca485db9a8e81e1fea600a668000b857ca000cfb57a39f5bcd6adc7143",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
