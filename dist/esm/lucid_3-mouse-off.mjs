export const name="lucid_3-mouse-off";
export const id="dl_a0312b1121764f62a67e";
export const url=new URL("../icons/lucid_3-mouse-off.svg?v=8824bcb5c27a4282d3378faae41c6f7f83c6e3c6c51533f163a24b34dac8131b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
