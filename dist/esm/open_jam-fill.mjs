export const name="open_jam-fill";
export const id="dl_d8364261c4e64a7b8dc8";
export const url=new URL("../icons/O/open_jam-fill.svg?v=9c51e5ee3d184f6883926582e1c8749d6721b537e10c992f17035e6c6bddfcc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
