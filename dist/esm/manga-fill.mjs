export const name="manga-fill";
export const id="dl_ecad6dacd77c7347b07b";
export const url=new URL("../icons/manga-fill.svg?v=ce2a8622531b088f175e2ff6247dce37280446982fcbffad449a944d13f89281",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
