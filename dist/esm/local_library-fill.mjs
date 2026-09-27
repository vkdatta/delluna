export const name="local_library-fill";
export const id="dl_4556123ed15a8dcd7dcf";
export const url=new URL("../icons/local_library-fill.svg?v=f14ac802fbb50d304f3f0de03ca4055001a0b8a6b00409a7db4ef51816418175",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
