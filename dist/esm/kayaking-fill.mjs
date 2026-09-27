export const name="kayaking-fill";
export const id="dl_7aadb976c4c0b6b2cb00";
export const url=new URL("../icons/kayaking-fill.svg?v=8245051a1627389232608ae2ec4dc10f5d0d7fc0b632fa126a6d5c85acd41f27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
