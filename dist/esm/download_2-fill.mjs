export const name="download_2-fill";
export const id="dl_d6902be2b6a4c2f9d167";
export const url=new URL("../icons/download_2-fill.svg?v=688237e3e613a0c6449be1b70a0b783eb44870ec3af8d2fcf03d6aa9a6829b5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
