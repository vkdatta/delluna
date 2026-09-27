export const name="lucid_1-book-type";
export const id="dl_a03602bf3da34d01be0d";
export const url=new URL("../icons/lucid_1-book-type.svg?v=2ef8401a8b29e908d7d29b17f1ce6e0e174b2d1bf6d2ec8a954d7c502ecddcbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
