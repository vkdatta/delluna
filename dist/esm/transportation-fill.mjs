export const name="transportation-fill";
export const id="dl_b8363c9882a88738d9c8";
export const url=new URL("../icons/transportation-fill.svg?v=13acb65b8ae3e08c1be6a5843bb8d6c046aa90a2237eb2ca9de62d79b7416bb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
