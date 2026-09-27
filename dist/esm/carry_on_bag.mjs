export const name="carry_on_bag";
export const id="dl_beda14f72fe3dec3b023";
export const url=new URL("../icons/carry_on_bag.svg?v=e6b55a6bfd433a882c40c8d1b00f3ff177b6a1e0f02bf51f802acda6dd3bcd2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
