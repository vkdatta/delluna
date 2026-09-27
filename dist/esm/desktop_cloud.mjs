export const name="desktop_cloud";
export const id="dl_6381ae90a719a8d71f31";
export const url=new URL("../icons/desktop_cloud.svg?v=e2e065de853d9ae2efe1a0a6eb9e787b7acd525c05630e27d8f2be88b0ef70b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
