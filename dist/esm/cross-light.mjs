export const name="cross-light";
export const id="dl_c1336cbb4c464429b8b1";
export const url=new URL("../icons/cross-light.svg?v=60812ce6389f6c0e63202d72e877f84b974edf5fda8a9c08eb2a4d6ba2f618da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
