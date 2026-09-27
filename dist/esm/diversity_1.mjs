export const name="diversity_1";
export const id="dl_6ac79845d87fd86a9d6f";
export const url=new URL("../icons/diversity_1.svg?v=da0300db36b7e286723ea3ed7484823f5c6095fe02cd240b0fb1f9c4c9b0b98f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
