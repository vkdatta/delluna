export const name="lucid_1-bird";
export const id="dl_ae1ca096dfda48d59ab0";
export const url=new URL("../icons/lucid_1-bird.svg?v=f9a44d2742866cbb0edcd30d9b8c0b1d763f0d401a39ba4bdcd5ebd93c8b3712",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
