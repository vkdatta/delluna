export const name="train";
export const id="dl_c22c35d8e893496e937a";
export const url=new URL("../icons/train.svg?v=77e6b1c989c6065204326f91ff8440b45ab6e315db38a79b1f4588714795bf05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
