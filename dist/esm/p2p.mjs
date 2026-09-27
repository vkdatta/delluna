export const name="p2p";
export const id="dl_2a83ef926c5e2c3cbade";
export const url=new URL("../icons/p2p.svg?v=5a0cfcfc21dd46be3cfe91a9d2b325b94a96b924376f1d312816cd4347566000",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
