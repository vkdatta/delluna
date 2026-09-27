export const name="theaters-fill";
export const id="dl_2b2da0765658152176f6";
export const url=new URL("../icons/theaters-fill.svg?v=fb4f28b8fd6b6cc83e40ecc9cb8fc8d90e9e4b72ded7a32dc9fe89b8755e1aae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
