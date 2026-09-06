export const name="hand-pointing-fill";
export const id="dl_7340043cd5504c65b679";
export const url=new URL("../icons/hand-pointing-fill.svg?v=5dfc14052ec576bc3880c7de9fa8d9fca2d57c26c2ae8bcc7a4c26e43f3bafa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
