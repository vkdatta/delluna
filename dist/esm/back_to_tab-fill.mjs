export const name="back_to_tab-fill";
export const id="dl_6adbd85343e38104e79a";
export const url=new URL("../icons/back_to_tab-fill.svg?v=2a78f12d4f2a197bf6e1b1e89e9be15bca8f66c3769cd5549a1a1b1bf0ee9233",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
