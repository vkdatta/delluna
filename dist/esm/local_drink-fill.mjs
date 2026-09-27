export const name="local_drink-fill";
export const id="dl_8130e7c222ed41a869c8";
export const url=new URL("../icons/local_drink-fill.svg?v=efce79ccc4a8e66dc70c89e9147107941cadf1a76c62d2a02efaa7660047c901",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
