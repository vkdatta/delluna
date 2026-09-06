export const name="open-ai-logo-duotone";
export const id="dl_f2ea889c751249ec8e92";
export const url=new URL("../icons/open-ai-logo-duotone.svg?v=d3ba7eb313201538f101c1607af1ee08d1b1f6935e235a8208633b22e695fee5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
