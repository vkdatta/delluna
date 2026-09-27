export const name="less-than-light";
export const id="dl_976ecf6ba56243caab8c";
export const url=new URL("../icons/less-than-light.svg?v=2ab927805f1ce3a90404c4e3d95a888d41b8078d7586b6ce718b30a0bea67224",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
