export const name="wc-fill";
export const id="dl_9ad1a3d81c55b764bd16";
export const url=new URL("../icons/wc-fill.svg?v=a4cbf767ef30685b5af9de2e68c9ef9049f4f9029a3a23ee90e730f2b40e965e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
