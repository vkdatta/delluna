export const name="lucid_3-redo-2";
export const id="dl_c6c687fde0a448bbb481";
export const url=new URL("../icons/lucid_3-redo-2.svg?v=b25e474f6c7d60fb8ad8058d573524ee7ad7e4292b48300e18e2ddd90057da8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
