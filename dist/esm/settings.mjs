export const name="settings";
export const id="dl_73500a55091d1f0e8696";
export const url=new URL("../icons/settings.svg?v=ded6b2f25ac2603a1ea736c0f7176056012ef4785d0c5016f5248eccc7247cd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
