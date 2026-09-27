export const name="laptop_chromebook";
export const id="dl_29ce47d93ffb609bb83f";
export const url=new URL("../icons/laptop_chromebook.svg?v=e9becc1772d035e202151ca4fd2da7dbba73ff3f339c97c5c0bd8ec4663bb4ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
