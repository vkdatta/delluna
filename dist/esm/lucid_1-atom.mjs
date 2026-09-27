export const name="lucid_1-atom";
export const id="dl_0562759199084659ad49";
export const url=new URL("../icons/lucid_1-atom.svg?v=8f9580b45ad55ed4939a69e459f97485210a31321efb5e7e584c8fb1cf900638",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
