export const name="recommend-fill";
export const id="dl_1a14b1f2bc3625b95054";
export const url=new URL("../icons/recommend-fill.svg?v=c2f1e6ecb5b43fd5c88f7294403b1a7fbb92ebaf485852503495c3c23b76435e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
