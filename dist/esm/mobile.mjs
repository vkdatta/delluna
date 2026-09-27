export const name="mobile";
export const id="dl_82a2f48f905c05c313f5";
export const url=new URL("../icons/mobile.svg?v=601c814f85a78afad7f3cf0d490199303b78ac294e3c3d558f67a5224d2ea9d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
