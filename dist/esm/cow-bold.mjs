export const name="cow-bold";
export const id="dl_bbd597d3655b49b3a7b5";
export const url=new URL("../icons/cow-bold.svg?v=0fe31e81b68a0ced5b1e33eaeb809fa9d8baf12810a4e0ee32fcf4c98bbbe3d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
