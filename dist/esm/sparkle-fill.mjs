export const name="sparkle-fill";
export const id="dl_b5f61e0ecdcb94172f4c";
export const url=new URL("../icons/sparkle-fill.svg?v=699c71d4f3243b6b367db037906ddfd98e5af53ca008b8b72707fa795b7d8a5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
