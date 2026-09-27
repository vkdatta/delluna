export const name="lucid_3-phone-incoming";
export const id="dl_5c076400a4164babaf5e";
export const url=new URL("../icons/lucid_3-phone-incoming.svg?v=e68f01f32ddd875989bfd35f700b6ba34ae245452b3b9c4d8a0f5e5807497764",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
