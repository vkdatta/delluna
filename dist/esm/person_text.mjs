export const name="person_text";
export const id="dl_b9e3e70708a94f6e9b06";
export const url=new URL("../icons/P/person_text.svg?v=50f51083d8a716b3b1f50e5af67f59d96a09d5258778f7a91e100893b15d9ed2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
