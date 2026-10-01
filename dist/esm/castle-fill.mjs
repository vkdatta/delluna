export const name="castle-fill";
export const id="dl_4a0b2831c51ba827be9e";
export const url=new URL("../icons/castle-fill.svg?v=583c76ed9f74c38f838b1d3e8092c87f2e5260337437a027910f9cada1599655",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
