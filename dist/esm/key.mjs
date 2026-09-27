export const name="key";
export const id="dl_3b735e5e29f09a25f339";
export const url=new URL("../icons/key.svg?v=d0a0227871080614bba00761cc802e781133bb99748f277696669405255f3ca9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
