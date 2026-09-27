export const name="wifi_1_bar-fill";
export const id="dl_46d6e6df4e2faf64ef06";
export const url=new URL("../icons/wifi_1_bar-fill.svg?v=93f1f18afe455090f36a20fdbcee48e36bdc885ca4857e541af4a17378fd6143",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
