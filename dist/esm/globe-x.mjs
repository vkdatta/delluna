export const name="globe-x";
export const id="dl_b18112e73b1c4f868e5b";
export const url=new URL("../icons/globe-x.svg?v=b29f7f95376328095dc8b72510203bf593c083ffe6359f2d8dbde12be34ec610",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
