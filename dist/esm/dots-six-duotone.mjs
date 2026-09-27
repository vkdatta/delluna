export const name="dots-six-duotone";
export const id="dl_ace7819513da4a28913c";
export const url=new URL("../icons/dots-six-duotone.svg?v=97c81deeaf1f37f21ce505980985c3035a948b9b4f9d6d7593b8c4761d4deed5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
