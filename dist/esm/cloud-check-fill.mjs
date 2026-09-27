export const name="cloud-check-fill";
export const id="dl_84ec6f82cdd640d69610";
export const url=new URL("../icons/cloud-check-fill.svg?v=9d4c4b265996a1f9331d4a61c1e04a28ca30715a2cc930eafa8c56a6329f1d5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
