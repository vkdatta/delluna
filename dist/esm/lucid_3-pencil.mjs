export const name="lucid_3-pencil";
export const id="dl_d9012e6e9d60493abfa9";
export const url=new URL("../icons/lucid_3-pencil.svg?v=a0b15d68f25b6de09a3d9dfc5c97a4d2bafb317bb715cff10db831314c79fc42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
