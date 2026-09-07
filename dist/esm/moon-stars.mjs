export const name="moon-stars";
export const id="dl_1b67b415954e445881c5";
export const url=new URL("../icons/moon-stars.svg?v=a87d9314c9313a719a3297985a9d8cd1c4aa4602490b9286d8caf5bec82c466d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
