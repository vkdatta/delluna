export const name="file-c-light";
export const id="dl_fc31732803be421ab17b";
export const url=new URL("../icons/file-c-light.svg?v=2427d6e1131194e02fcc1d5fbf5fe4b766726a182f6c757269ab7d8a55c47f53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
