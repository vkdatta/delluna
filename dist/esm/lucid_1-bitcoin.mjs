export const name="lucid_1-bitcoin";
export const id="dl_725fec57d0ed44d2a027";
export const url=new URL("../icons/lucid_1-bitcoin.svg?v=fe221085c3b56381c2e3b65743e039431883eaadc8075c77a0b1f6dd8d7dbace",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
