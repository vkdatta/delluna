export const name="picture-in-picture-bold";
export const id="dl_41004d524d2f4255a797";
export const url=new URL("../icons/picture-in-picture-bold.svg?v=77c50c9dcab4116430e21eb68b8226a54f8fd1d5a507a1c28f5e6968fe7e5a01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
