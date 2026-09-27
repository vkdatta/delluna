export const name="venus-and-mars";
export const id="dl_ea756cbab4a74ad6a253";
export const url=new URL("../icons/venus-and-mars.svg?v=3e95fd313a1270aa8bb2e111b10e14f4f94ff0fa210e91a5cba994224bf8ff1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
