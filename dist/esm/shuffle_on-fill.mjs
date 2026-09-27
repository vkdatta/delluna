export const name="shuffle_on-fill";
export const id="dl_1a7d818768a1a5690453";
export const url=new URL("../icons/shuffle_on-fill.svg?v=1954628590852d58bae29de3e3b8c2579f55a8cd8b0aa6bcf20d4b57c6dfe747",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
