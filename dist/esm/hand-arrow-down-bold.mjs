export const name="hand-arrow-down-bold";
export const id="dl_6af6cf15bd3a498a9476";
export const url=new URL("../icons/hand-arrow-down-bold.svg?v=089e9a55b491d94d2970880988ae8eea5494df63b1baff64694488deb22190e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
