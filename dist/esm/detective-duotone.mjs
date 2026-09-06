export const name="detective-duotone";
export const id="dl_af1fb4949b4347d4b34a";
export const url=new URL("../icons/detective-duotone.svg?v=d051c057f5f51909fc61418256470df0b426921064741e1b0eaf59b47078ed8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
