export const name="lucid_3-mouse-off";
export const id="dl_a0312b1121764f62a67e";
export const url=new URL("../icons/lucid_3-mouse-off.svg?v=8d28cb0046c202347a6fc9ab9710771fb69d27cdbf66f657a815ee5f8533e325",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
