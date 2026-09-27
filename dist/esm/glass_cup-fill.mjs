export const name="glass_cup-fill";
export const id="dl_8e2f11720cb3a3b97eb4";
export const url=new URL("../icons/glass_cup-fill.svg?v=11a02730bc0d0df244e7a6fc0743c0de87f13607d64a29732374360898c9d609",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
