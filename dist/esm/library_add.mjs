export const name="library_add";
export const id="dl_4ad9576cb9dcf985cda8";
export const url=new URL("../icons/library_add.svg?v=4f8557a3410d3a993a6d54c68d9074680da27f6ad32fafba0e6382c77d81fa5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
