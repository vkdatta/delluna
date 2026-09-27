export const name="tree-view-fill";
export const id="dl_53ac303e1bd2ee08f99d";
export const url=new URL("../icons/tree-view-fill.svg?v=75d890269b927c2e0304ccb75a10b48830c54c51f3b46d2f3b9aef967265a84e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
