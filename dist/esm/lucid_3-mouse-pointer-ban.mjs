export const name="lucid_3-mouse-pointer-ban";
export const id="dl_10c6648671134cf0aab4";
export const url=new URL("../icons/lucid_3-mouse-pointer-ban.svg?v=992756cea0885bbe33e2bc1d8331e92d5d97bbc845e718e673b820baa36df3bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
